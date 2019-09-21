import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";

// implement state to be updating from the values of the text field when the user clicks Fab

// when user clicks on Fab,
// take current value from textfield and set state

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value)
  }
};

const Lists = ({ classes }) => {
  const text = useInputValue("");

  return (
    <Container maxwidth="lg">
      <form noValidate autoComplete="off">
        <TextField
          type="text"
          label="ToDo"
          placeholder="Enter text here"
          name="todo"
          {...text}
        />
        
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </form>
    </Container>
  );
};

export default Lists;
