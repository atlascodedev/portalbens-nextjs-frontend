import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MenuItem } from "../../@types";
import Footer from "../../components/LandingPage/Footer/Main";
import Navbar from "../../components/LandingPage/Navbar/Main";
import LoaderSpinner from "../../components/Util/Loader";
import logo from "../../public/images/portalbens-logo.svg";

interface Props {
  children: React.ReactNode;
  menu: MenuItem[];
}

const LandingPageLayout = ({ children, menu }: Props) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence initial={false}>
        {isLoaded && (
          <motion.div
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
      <Navbar menu={menu} logo={"/images/portalbens-logo.svg"} /> {children}
      <Footer />
    </React.Fragment>
  );
};

export default LandingPageLayout;
