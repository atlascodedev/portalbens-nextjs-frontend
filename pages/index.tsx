import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import {
  BlogPostType,
  CardProduct,
  PartnerType,
  TestimonialsType,
} from "../@types";
import AboutUs from "../components/LandingPage/AboutUs/Main";
import Posts from "../components/LandingPage/BlogList/Main";
import Contact from "../components/LandingPage/Contact/Main";
import DefenseSection from "../components/LandingPage/DefenseSection/Main";
import Hero from "../components/LandingPage/Hero/Main";
import Partners from "../components/LandingPage/Partners/Main";
import ProductIntro from "../components/LandingPage/ProductIntro/Main";
import ProductSection from "../components/LandingPage/ProductSection/Main";
import Testimonials from "../components/LandingPage/Testimonials/Main";
import useLandingPageGeneration from "../hooks/useLandingPageGeneration";
import LandingPageLayout from "../layout/Landing";

interface LandingProps {
  testimonials: TestimonialsType[];
  blog: BlogPostType[];
  partners: PartnerType[];
  cards: CardProduct[];
}

function Home({ blog, cards, partners, testimonials }: LandingProps) {
  const aboutUsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const blogRef = React.useRef<HTMLDivElement>(null);
  const productSection = React.useRef<HTMLDivElement>(null);

  const [loadingState, setLoadingState] = React.useState<boolean>(false);

  const toggleLoading = (loading: boolean) => {
    setLoadingState(loading);
  };

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
      label: "Nossos serviços",
      component: <ProductSection products={cards} />,
      ref: productSection,
      hidden: false,
    },

    {
      label: "Depoimentos",
      component:
        testimonials.length > 0 ? (
          <Testimonials testimonials={testimonials} />
        ) : null,
      ref: null,
      hidden: true,
    },
    {
      label: "Blog",
      component: blog.length > 0 ? <Posts blogPosts={blog} /> : null,
      ref: blogRef,
      hidden: blog.length > 0 ? false : true,
    },

    {
      label: "Parceiros",
      component: partners.length > 0 ? <Partners partners={partners} /> : null,
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

export const getStaticProps: GetStaticProps<LandingProps> = async (context) => {
  let testimonialsRequest: AxiosResponse<TestimonialsType[]> = await axios.get(
    "https://us-central1-portalbens-nextjs-hefesto.cloudfunctions.net/api/collections/entries/testimonials"
  );
  let partnersRequest: AxiosResponse<PartnerType[]> = await axios.get(
    "https://us-central1-portalbens-nextjs-hefesto.cloudfunctions.net/api/collections/entries/partners"
  );
  let blogRequest: AxiosResponse<BlogPostType[]> = await axios.get(
    "https://us-central1-portalbens-nextjs-hefesto.cloudfunctions.net/api/collections/entries/portalBlog"
  );

  let cardsRequest: AxiosResponse<CardProduct[]> = await axios.get(
    "https://us-central1-portalbens-nextjs-hefesto.cloudfunctions.net/api/collections/entries/cartas"
  );

  const testimonaislData: TestimonialsType[] = testimonialsRequest.data;

  const partnersData: PartnerType[] = partnersRequest.data;
  const blogData: BlogPostType[] = blogRequest.data;
  const cardsData: CardProduct[] = cardsRequest.data;

  return {
    props: {
      testimonials: testimonaislData,
      blog: blogData,
      partners: partnersData,
      cards: cardsData,
    },
  };
};
