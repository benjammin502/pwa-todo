import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Lists = ({ classes }) => {
  return (
    <Fab color="primary" aria-label="add" className={classes.fab}>
      <AddIcon />
    </Fab>
  );
};

export default Lists;
