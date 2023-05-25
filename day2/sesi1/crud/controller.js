import user from "./db.js";
import { addUser, deleteUser, editUser } from "./service.js";

function listUser(){
    return user;
}

addUser("email@gmail.com", "fullemal", "password", 33, true)


// deleteUser("email@gmail.com")


editUser("email@gmail.com", "nando", "passwordedit", 1234, true)


console.log(listUser())