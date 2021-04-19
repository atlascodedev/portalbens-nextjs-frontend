import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticPathsResult } from "next";
import React from "react";
import * as fs from "fs";
import * as path from "path";
import { BlogPostType } from "../../@types";
import converToSlug from "../../helper/convertToSlug";
import LandingPageLayout from "../../layout/Landing";

const blogDataDir: string = path.resolve(
  process.cwd(),
  "pages",
  "blog",
  "data"
);

const BlogTemplate = (props: BlogPostType) => {
  console.log(props);

  return (
    <LandingPageLayout navbarAnchored menu={[]}>
      <div dangerouslySetInnerHTML={{ __html: props.blogPost }} />
    </LandingPageLayout>
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
