export const isChrome: boolean = global.window.navigator.userAgent.includes(
  "Chrome"
);

export const smoothScrollSupport: boolean =
  "scrollBehavior" in global.window.document.documentElement.style;
