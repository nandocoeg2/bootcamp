const harga_rumah = [20,30,40,10,200,15]

let budget = 100

let temp = 0

let temp_jumlah = 0

for(let i = 0; i<harga_rumah.length; i++){
    const potong = budget - harga_rumah[i]

    if (potong>=0){
        budget-=harga_rumah[i]
        temp_jumlah += 1
        console.log(budget)
    }
}

console.log(temp_jumlah)
