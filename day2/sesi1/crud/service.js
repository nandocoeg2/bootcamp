import user from "./db.js";

export function addUser(email, fullname, password, age, verified){
    user.push({email, fullname, password, age, verified})
    return;
}

export function deleteUser(email){
    const index = user.findIndex((item) => item.email === email);
    user.splice(index, 1);
    return user;
}

export function editUser(email, fullname, password, age, verified){
    const index = user.findIndex((item) => item.email === email);
    user[index].fullname = fullname;
    user[index].password = password;
    user[index].age = age;
    user[index].verified = verified;
    return user;
}
