import Head from "next/head";
import React from "react";
import AboutUs from "../components/LandingPage/AboutUs/Main";
import DefenseSection from "../components/LandingPage/DefenseSection/Main";
import Hero from "../components/LandingPage/Hero/Main";
import useLandingPageGeneration from "../hooks/useLandingPageGeneration";
import LandingPageLayout from "../layout/Landing";

interface Props {}

function Home({}: Props) {
  const aboutUsRef = React.useRef<HTMLDivElement>(null);

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
