import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  delay?: number;
  marginY?: string;
  marginX?: string;
}

const FadeAnimation = ({
  children,
  delay,
  marginY = "-50px",
  marginX = "0px",
}: Props) => {
  const controls = useAnimation();

  const { inView, ref, entry } = useInView({
    triggerOnce: true,
    rootMargin: `${marginY} ${marginX}`,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log(inView);
      console.log("view");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={"hidden"}
      transition={{ duration: 0.75, delay: delay ? delay : 0 }}
      variants={{
        visible: { opacity: [0, 0.5, 0.75, 1], x: 0 },
        hidden: { opacity: 0, x: -250 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
