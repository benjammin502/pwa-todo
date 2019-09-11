import React, { useState } from "react";
// import logo from './logo.svg';
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(9),
    right: theme.spacing(3),
  },
  bottomNavigation: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    // define app structure then break into individual components
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React To-Do
          </Typography>
        </Toolbar>
      </AppBar>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <BottomNavigation
        value={value}
        onChange={(even, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root, classes.bottomNavigation}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
