import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
//import Wrapper from "../Helpers/Wrapper"; // same as Fragment

const AddUser = (props) => {
  const [getUsername, SetUsername] = useState("");
  const [getAge, SetAge] = useState("");
  const [error, SetError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (getUsername.trim().length === 0) {
      SetError({
        title: "Invalid Input",
        message: "Please enter a valid name (non-emtpy values)",
      });
      return;
    }

    //get < 1 works(java script thing), but to make sure we compare numbers use + at the start
    // could also validate age input length but it works without validating that
    if (+getAge < 1) {
      SetError({
        title: "Invalid age",
        message: "Please enter a valid age (non-zero and no negative values)",
      });
      return;
    }

    props.onAddUser(getUsername, getAge);
    SetUsername("");
    SetAge("");
  };

  const UsernameChangeHandler = (event) => {
    SetUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    SetAge(event.target.value);
  };

  const SetErrorHandler = (event) => {
    SetError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={SetErrorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={getUsername}
            onChange={UsernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={getAge}
            onChange={AgeChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
