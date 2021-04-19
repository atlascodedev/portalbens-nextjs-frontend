import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticPathsResult } from "next";
import React from "react";
import * as fs from "fs";
import * as path from "path";
import { BlogPostType } from "../../@types";
import converToSlug from "../../helper/convertToSlug";
import LandingPageLayout from "../../layout/Landing";
import styled from "styled-components";
import Head from "next/head";

const BlogPostContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  width: 100%;

  overflow-x: hidden;
`;

interface BlogPostMainImageProps {
  imageURL: string;
}

const BlogPostInnerMainImage = styled.div<BlogPostMainImageProps>`
  background-image: ${(props) => `url(${props.imageURL})`};
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: auto;
  height: 70vh;
  margin: 5% 0px;
`;

const BlogPostInnerDescriptionContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5% 0px;
`;

const BlogPostTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 15px;

  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;

const BlogPostDescription = styled.div`
  font-size: 12px;
  font-weight: 400px;
  font-family: "Roboto";

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const BlogPostMetadataContainer = styled.div`
  width: 100%;
  display: flex;
`;

const BlogPostDate = styled.div``;

const blogDataDir: string = path.resolve(
  process.cwd(),
  "pages",
  "blog",
  "data"
);

const BlogTemplate = (props: BlogPostType) => {
  console.log(props);

  return (
    <React.Fragment>
      <Head>
        <title>{props.blogTitle} - Portal Bens Contemplados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPageLayout navbarAnchored menu={[]}>
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <BlogPostInnerDescriptionContainer>
            <BlogPostTitle>{props.blogTitle}</BlogPostTitle>
            <BlogPostDescription>{props.blogDescription}</BlogPostDescription>
            <BlogPostMetadataContainer></BlogPostMetadataContainer>
          </BlogPostInnerDescriptionContainer>

          <BlogPostInnerMainImage
            title={props.featuredImage.imageDescription}
            imageURL={props.featuredImage.imageURL}
          ></BlogPostInnerMainImage>
          <BlogPostContainerRoot>
            <div dangerouslySetInnerHTML={{ __html: props.blogPost }} />
          </BlogPostContainerRoot>
        </div>
      </LandingPageLayout>
    </React.Fragment>
  );
};

export default BlogTemplate;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPostRequest: AxiosResponse<BlogPostType[]> = await axios.get(
    "https://us-central1-portalbens-nextjs-hefesto.cloudfunctions.net/api/collections/entries/portalBlog"
  );

  const blogPostData = blogPostRequest.data;

  if (!fs.existsSync(blogDataDir)) {
    fs.mkdirSync(blogDataDir);
  }

  blogPostData.forEach((value: BlogPostType, index: number) => {
    let blogDataJSON: string = JSON.stringify(value);

    fs.writeFileSync(`${blogDataDir}/${value.uuid}.json`, blogDataJSON, "utf8");
  });

  const paths = blogPostData.map((value: BlogPostType, index: number) => {
    return {
      params: { slug: converToSlug(value.blogTitle) },
    };
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  let blogData: BlogPostType[] = [];

  let availableFiles: string[] = fs.readdirSync(blogDataDir);

  availableFiles.forEach((value: string, index: number) => {
    let jsonData: string = fs
      .readFileSync(`${blogDataDir}/${value}`, "utf8")
      .toString();

    let parsedData: BlogPostType = JSON.parse(jsonData);

    blogData.push(parsedData);
  });

  let blogPost: BlogPostType[] = blogData.filter((value, index) => {
    return converToSlug(value.blogTitle) == params.slug;
  });
  //   console.log(blogData);

  return { props: blogPost[0] };
};
