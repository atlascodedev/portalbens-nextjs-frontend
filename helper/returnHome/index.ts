const returnHome = () => {
  try {
    if (global.window.location.pathname === "/") {
      global.window.scrollTo(0, 0);
    } else if (process.env.NODE_ENV !== "production") {
      global.window.location.href = `http://${global.window.location.host}`;
    } else {
      global.window.location.href = `https://${global.window.location.host}`;
    }
  } catch (error) {
    console.log(error);
  }
};

export default returnHome;
