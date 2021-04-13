import React from "react";
import { useRouter } from "next/router";
import scrollPolyfill from "../scrollIntoViewPolyfill";
import convertToSlug from "../convertToSlug";
import { isChrome, smoothScrollSupport } from "../../constants";
import converToSlug from "../convertToSlug";

interface useScrollIntoViewFunction {
  ref: React.RefObject<HTMLDivElement | HTMLElement> | null;
  menuName: string;
  callback?: (...args: any[]) => void;
}

const scrollIntoView = ({
  menuName,
  ref,
  callback,
}: useScrollIntoViewFunction) => {
  const router = useRouter();

  if (
    global.window.location.pathname === "/" ||
    isChrome ||
    !smoothScrollSupport
  ) {
    scrollPolyfill(`#${converToSlug(menuName).toLowerCase()}`);
  } else {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (typeof callback !== null || typeof callback !== undefined) {
    callback();
  } else {
    router.push("/");
  }
};

export default scrollIntoView;
