import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import fetch from "isomorphic-unfetch";

import { Comic, MarvelComicResp } from "../../models/marvel";

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await fetch(
    `http://gateway.marvel.com/v1/public/comics?ts=5&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.MARVEL_HASH}`
  );
  const { data }: MarvelComicResp = await resp.json();
  const paths = data.results.map((comic) => ({
    params: { id: comic.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const resp = await fetch(
    `http://gateway.marvel.com/v1/public/comics/${id}?ts=5&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.MARVEL_HASH}`
  );
  const { data }: MarvelComicResp = await resp.json();

  return {
    props: {
      comic: data.results[0],
    },
  };
};

interface Props {
  comic: Comic;
}

const ComicPage = ({ comic }: Props) => {
  console.log(comic);
  return <div></div>;
};

export default ComicPage;
