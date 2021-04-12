import Head from "next/head";
import React from "react";
import useLandingPageGeneration from "../hooks/useLandingPageGeneration";
import LandingPageLayout from "../layout/Landing";

interface Props {}

function Home({}: Props) {
  const topRef = React.useRef<HTMLDivElement>(null);
  const testRef = React.useRef<HTMLDivElement>(null);

  const { navigableArray, menuItemArray } = useLandingPageGeneration([
    {
      label: "Teste",
      component: <div> hello there</div>,
      ref: testRef,
      hidden: true,
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
