import React from "react";

interface Props {}

const Post = (props: Props) => {
  return <div></div>;
};

export async function getStaticPaths() {
  const pathResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users/"
  );

  const parsedPathData = await pathResponse.json();

  const paths = parsedPathData.map((value, index) => {
    return {
      params: { id: value.id },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");

  const parsedData = await response.json();

  console.log(params);

  return {
    props: {
      users: parsedData,
    },
  };
}

export default Post;
