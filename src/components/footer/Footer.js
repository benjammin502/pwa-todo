import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ListIcon from "@material-ui/icons/List";

const Footer = ({ classes }) => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(even, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={`${classes.root} ${classes.bottomNavigation}`}
    >
      <BottomNavigationAction label="Lists" icon={<ListIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
