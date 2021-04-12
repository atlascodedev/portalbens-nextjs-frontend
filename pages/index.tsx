import Head from "next/head";
import React from "react";
import useLandingPageGeneration from "../hooks/useLandingPageGeneration";

function Home(props) {
  const testRef = React.useRef<HTMLDivElement>(null);

  const landingPage = useLandingPageGeneration([
    { label: "Teste", component: <div> hello there</div>, ref: testRef },
  ]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {landingPage.map((navigable, index) => {
          return <React.Fragment>{navigable.sectionElement}</React.Fragment>;
        })}
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      users: "hello",
    },
  };
}

export default Home;
