import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, SetUserList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    SetUserList((currentUserList) => {
      return [
        ...currentUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
