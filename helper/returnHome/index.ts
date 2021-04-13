const returnHome = () => {
  try {
    if (global.window.location.pathname === "/") {
      global.window.scrollTo(0, 0);
    } else {
      global.window.location.href = `https://${global.window.location.hostname}/`;
    }
  } catch (error) {
    console.log(error);
  }
};

export default returnHome;
