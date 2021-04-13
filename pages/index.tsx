import Head from "next/head";
import React from "react";
import { BlogPost } from "../@types";
import AboutUs from "../components/LandingPage/AboutUs/Main";
import Posts from "../components/LandingPage/BlogList/Main";
import Contact from "../components/LandingPage/Contact/Main";
import DefenseSection from "../components/LandingPage/DefenseSection/Main";
import Hero from "../components/LandingPage/Hero/Main";
import Partners from "../components/LandingPage/Partners/Main";
import ProductIntro from "../components/LandingPage/ProductIntro/Main";
import Testimonials from "../components/LandingPage/Testimonials/Main";
import useLandingPageGeneration from "../hooks/useLandingPageGeneration";
import LandingPageLayout from "../layout/Landing";

interface Props {}

function Home({}: Props) {
  const aboutUsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const blogRef = React.useRef<HTMLDivElement>(null);

  const mockBlogData: BlogPost[] = [
    {
      blogDate: "25/02/1995",
      blogFeaturedImage: "https://via.placeholder.com/700",
      blogTitle: "Blog post 1",
      blogURL: "https://atlascode.dev",
      html: "<div>Hello </div>",
      readingTime: "10",
    },
    {
      blogDate: "25/02/1995",
      blogFeaturedImage: "https://via.placeholder.com/700",
      blogTitle: "Blog post 2",
      blogURL: "https://atlascode.dev",
      html: "<div>Hello </div>",
      readingTime: "10",
    },
    {
      blogDate: "25/02/1995",
      blogFeaturedImage: "https://via.placeholder.com/700",
      blogTitle: "Blog post 3",
      blogURL: "https://atlascode.dev",
      html: "<div>Hello </div>",
      readingTime: "10",
    },
    {
      blogDate: "25/02/1995",
      blogFeaturedImage: "https://via.placeholder.com/700",
      blogTitle: "Blog post 4",
      blogURL: "https://atlascode.dev",
      html: "<div>Hello </div>",
      readingTime: "10",
    },
    {
      blogDate: "25/02/1995",
      blogFeaturedImage: "https://via.placeholder.com/700",
      blogTitle: "Blog post 5",
      blogURL: "https://atlascode.dev",
      html: "<div>Hello </div>",
      readingTime: "10",
    },
    {
      blogDate: "25/02/1995",
      blogFeaturedImage: "https://via.placeholder.com/700",
      blogTitle: "Blog post 6",
      blogURL: "https://atlascode.dev",
      html: "<div>Hello </div>",
      readingTime: "10",
    },
  ];

  const { navigableArray, menuItemArray } = useLandingPageGeneration([
    {
      label: "Hero",
      component: <Hero />,
      ref: null,
      hidden: true,
    },
    {
      label: "defense",
      component: <DefenseSection />,
      ref: null,
      hidden: true,
    },

    {
      label: "Sobre nós",
      component: <AboutUs />,
      ref: aboutUsRef,
    },
    {
      label: "Product intro",
      component: <ProductIntro />,
      ref: null,
      hidden: true,
    },

    {
      label: "Depoimentos",
      component: <Testimonials />,
      ref: null,
      hidden: true,
    },
    {
      label: "Blog",
      component: <Posts blogPosts={mockBlogData} />,
      ref: blogRef,
      hidden: false,
    },

    {
      label: "Parceiros",
      component: <Partners />,
      ref: null,
      hidden: true,
    },
    {
      label: "Contato",
      component: <Contact />,
      ref: contactRef,
      hidden: false,
    },
  ]);

  return (
    <div>
      <Head>
        <title>Portal Bens Contemplados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPageLayout menu={menuItemArray}>
        {navigableArray.map((navigable, index) => {
          return (
            <React.Fragment key={index}>
              {navigable.navigableElement}
            </React.Fragment>
          );
        })}
      </LandingPageLayout>
    </div>
  );
}

export default Home;
