import React from "react";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

interface AnimationWrapperProps {
  animateClasses: string;
  children: React.ReactNode;
}

const AnimationWrapper = ({
  animateClasses = "wow fadeInUp",
  children,
}: AnimationWrapperProps) => {
  React.useEffect(() => {
    new WOW().init();
  });

  return <div className="wow bounceInUp">{children}</div>;
};

export default AnimationWrapper;
