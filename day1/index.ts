const users = [{email:"mail@gmail.com", password:"123"},{email:"mail1@gmail.com", password:"123"}]

const userBaru = {email:"mailBaru@gmail.com", password:"123"}

let hitung = 0

for (let i=0; i < users.length; i++){
    if(users[i].email === userBaru.email){
        console.log("user sudah ada")
    }
    else{
        hitung++
    }
}

if(hitung === users.length){
    users.push(userBaru);
    console.log("user ditambahkan")
}


console.log(users)