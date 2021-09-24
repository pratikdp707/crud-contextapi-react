import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {

    const [users, setUsers] = useState([
        {
            id: "f67b2e6d-cf72-4daf-9e1e-517305b40c1e",
            fName : "John",
            lName : "Cena",
            email : "johncena.jc@gmail.com",
            mobile : "+120-12316123"
        },{
            id: "b7f5f054-b9a9-41f0-aec6-e9f5b31cdd38",
            fName : "Sachin",
            lName : "Tendulkar",
            email : "sachintendulkar.st@gmail.com",
            mobile : "+91 9516314123"
        }
    ])
    
    const [editUser, seteditUser] = useState({});


    const addUser = (user) => {
        console.log(user);
        setUsers([...users,user]);
        console.log(users);
    }

    const removeUser = (id) => {
        setUsers(users.filter( user => user.id !== id));
    }

    const findUser = (id) => {
        console.log(id);
        const user = users.find(u => u.id === id);
        seteditUser(user);
        console.log(user);
        console.log(editUser);
    }

    const updateUser = (id, editUser) => {
        const updatedUsers = users.map(user => (user.id === id ? editUser : user));
        setUsers(updatedUsers);
    }

    return(
        <UserContext.Provider value={{users, addUser, removeUser, updateUser, findUser, editUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;