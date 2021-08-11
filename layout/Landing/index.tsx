import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MenuItem } from "../../@types";
import Footer from "../../components/LandingPage/Footer/Main";
import Navbar from "../../components/LandingPage/Navbar/Main";
import Loading from "../../components/Util/GlobalLoader";
import LoaderSpinner from "../../components/Util/Loader";
import { documentBodyScrollToggle } from "../../helper/documentBodyScrollToggle";
import { useDocumentBodyLock } from "../../hooks/useDocumentBodyLock";
import logo from "../../public/images/portalbens-logo.svg";

interface Props {
  children: React.ReactNode;
  menu: MenuItem[];
  navbarAnchored?: boolean;
  loadingState?: boolean;
}

const LandingPageLayout = ({
  children,
  menu,
  navbarAnchored,
  loadingState,
}: Props) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(true);

  // const bodyLock = useDocumentBodyLock(isLoaded);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence initial={false}>
        {isLoaded && (
          <motion.div
            onAnimationComplete={() => {
              global.window.document.getElementsByTagName(
                "html"
              )[0].style.overflow = "initial";
              documentBodyScrollToggle(false);
            }}
            style={{ position: "absolute", zIndex: 9999999 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
          >
            <LoaderSpinner />
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar
        navbarAnchored={navbarAnchored}
        menu={menu}
        logo={"/images/portalbens-logo.svg"}
      />{" "}
      {children}
      <Footer />
      <Loading isLoading={loadingState} />
    </React.Fragment>
  );
};

export default LandingPageLayout;
