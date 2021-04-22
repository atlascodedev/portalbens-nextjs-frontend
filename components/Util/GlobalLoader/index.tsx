import { Fade, LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
  isLoading: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: 9999,
  },

  linearProgress: {
    backgroundColor: "#da4e49",
  },
}));

const Loading = ({ isLoading }: Props) => {
  const classes = useStyles();

  return (
    <Fade in={isLoading} timeout={{ enter: 100, exit: 100 }}>
      <div
        style={{ display: isLoading ? "block" : "none" }}
        className={classes.root}
      >
        <LinearProgress className={classes.linearProgress} />
      </div>
    </Fade>
  );
};

export default Loading;
