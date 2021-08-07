import { GetStaticProps } from "next";
import fetch from "isomorphic-unfetch";

import { HeaderComics } from "../components/header-comics";
import { ListComics } from "../components/list-comics";
import { Comic, MarvelComicResp } from "../models/marvel";

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(
    `http://gateway.marvel.com/v1/public/comics?ts=5&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.MARVEL_HASH}`
  );
  const { data }: MarvelComicResp = await resp.json();

  return {
    props: {
      comics: data.results,
    },
  };
};

interface Props {
  comics: Comic[];
}

const Comics = ({ comics }: Props) => {
  return (
    <>
      <HeaderComics />
      <div className="wrapper">
        <ListComics title="NUEVOS LANZAMIENTOS" comics={comics} />
      </div>
    </>
  );
};

export default Comics;
