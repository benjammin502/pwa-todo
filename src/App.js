import React from "react";
// import logo from './logo.svg';
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Lists from './components/lists/Lists';

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
    right: theme.spacing(3)
  },
  bottomNavigation: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
}));

function App() {
  const classes = useStyles();
  
  return (
    // define app structure then break into individual components
    <div>
      <Header classes={classes} />
      <Lists classes={classes} />
      <Footer classes={classes} />
    </div>
  );
}

export default App;
