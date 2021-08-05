import { GetStaticProps } from "next";
import fetch from "isomorphic-unfetch";

import { HeaderComics } from "../components/header-comics";
import { ListComics } from "../components/list-comics";
import { Comic, MarvelComicResp } from "../models/marvel";

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(
    "http://gateway.marvel.com/v1/public/comics?ts=5&apikey=52433f63cc0dcd63b95101885ad6c60f&hash=032073b05043bcad3311166d581354a4"
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
