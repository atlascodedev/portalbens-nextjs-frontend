import { animate, useAnimation } from "framer-motion";
import {
  AnimationControls,
  ControlsAnimationDefinition,
} from "framer-motion/types/animation/types";
import React from "react";
import { useInView } from "react-intersection-observer";

interface useObserverControlledAnimationHook {
  ref: (node?: Element) => void;
  animationControls: AnimationControls;
}

const useObserverControlledAnimation = (
  controls: ControlsAnimationDefinition,
  marginY: string = "-50px",
  marginX: string = "0px",
  triggerOnce: boolean = true
): useObserverControlledAnimationHook => {
  const { inView, ref } = useInView({
    triggerOnce: triggerOnce,
    rootMargin: `${marginY} ${marginX}`,
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start(controls);
    }
  }, [inView, animationControls]);

  return { ref, animationControls };
};

export default useObserverControlledAnimation;
