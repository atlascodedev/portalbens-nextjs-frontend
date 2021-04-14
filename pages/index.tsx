import Head from "next/head";
import React from "react";
import { BlogPost, Product } from "../@types";
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

interface Props {}

function Home({}: Props) {
  const aboutUsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const blogRef = React.useRef<HTMLDivElement>(null);
  const productSection = React.useRef<HTMLDivElement>(null);

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

  const mockProductData: Product[] = [
    {
      admin: "Admin teste 1",
      entradaCredito: "3500",
      featured: true,
      saldoCredito: "12x de R$651,00",
      type: "housing",
      valorCredito: "35000",
    },

    {
      admin: "Admin teste 2",
      entradaCredito: "4250",
      featured: false,
      saldoCredito: "10x de R$450,00",
      type: "vehicle",
      valorCredito: "60000",
    },

    {
      admin: "Admin teste 3",
      entradaCredito: "5000",
      featured: false,
      saldoCredito: "25x de R$800",
      type: "housing",
      valorCredito: "500000",
    },
    {
      admin: "Admin teste 4",
      entradaCredito: "52323",
      featured: true,
      saldoCredito: "25x de R$93232",
      type: "housing",
      valorCredito: "199999",
    },
    {
      admin: "Admin teste 5",
      entradaCredito: "1000000",
      featured: false,
      saldoCredito: "100x de R$100000",
      type: "vehicle",
      valorCredito: "3123213213131",
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
      label: "Nossos produtos",
      component: <ProductSection products={mockProductData} />,
      ref: productSection,
      hidden: false,
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
