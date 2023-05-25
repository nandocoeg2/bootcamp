const test_case = 3;
for (let i = 0; i < test_case; i++) {
    let budget = Math.floor(Math.random() * 500);
    console.log("budget = "+budget)
    let jumlah_rumah = Math.floor(Math.random() * 4);
    console.log("jumlah rumah = " +jumlah_rumah) 

    let harga_rumah = [];
    for (let j = 0; j < jumlah_rumah; j++) {
        harga_rumah.push(Math.floor(Math.random() * 100));
    }
    
    let sorting_harga_rumah = harga_rumah.sort((a, b) => a - b);
    console.log("sort harga rumah = "+sorting_harga_rumah)
    let jumlah_rumah_dibeli = 0;

    for (let k = 0; k < sorting_harga_rumah.length; k++) {
        budget -= sorting_harga_rumah[k];
        if (budget >= sorting_harga_rumah[k]) {
            jumlah_rumah_dibeli++;
        }
    }
    console.log("==================")
    console.log("jumlah rumah dibeli = "+ jumlah_rumah_dibeli);
    console.log("==================")

}