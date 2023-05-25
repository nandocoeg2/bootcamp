// using class

// class Barang {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price
//     }
//     detail() {
//         return this.name + " " + this.price
//     }
// }

// const barang1 = new Barang("Lenovo Thinkpad x230", 100)
// const barang2 = new Barang("Dell xps 13", 200)
// const barang3 = new Barang("Lenovo Thinkpad X1", 300)

// console.log(barang1.name)
// console.log(barang2.price)
// console.log(barang3.detail())

// using function
// ========================================

// function Barang(name, price) {
//   this.name = name;
//   this.price = price;
//   this.detail = () => {
//     return this.name + " " + this.price;
//   };
// }

// const barang1 = new Barang("Lenovo Thinkpad x230", 100);
// const barang2 = new Barang("Dell xps 13", 200);
// const barang3 = new Barang("Lenovo Thinkpad X1", 300);

// console.log(barang1.name);
// console.log(barang2.price);
// console.log(barang3.detail());

// =======================================
//

// function Barang(name, price) {
//   return `Nama: ${name} Harga: ${price}`;
// }

// console.log(Barang("Lenovo", 300));

// =========================================
// Arrow Function

// const Barang = (name, price) => {
//   return `Nama: ${name} Harga: ${price}`;
// };

// console.log(Barang("Lenovo Thinkpad x230", 300));

// =================================================

// class Ongkir {
//   constructor(berat) {
//     this.totalBiaya = function () {
//       return berat * 1000;
//     };
//   }
//   tampilanBiaya() {
//     return this.totalBiaya();
//   }
// }

// const laptop = new Ongkir(4);
// console.log(laptop.tampilanBiaya());

// ===============================================

// class People {
//   constructor(nama, umur) {
//     this.name = nama;
//     this.umur = umur;
//   }
// }

// class Person extends People {
//   constructor(nama, umur, pekerjaan) {
//     super(nama, umur);
//     this.pekerjaan = pekerjaan;
//   }
// }

// const Orang = new Person("Adit", 22, "Kill");
// console.log(Orang.name, Orang.pekerjaan, Orang.umur);

// =========================================

// class People {
//   constructor(nama, umur) {
//     this.name = nama;
//     this.umur = umur;
//   }
//   warnaRambut() {
//     return `Nama saya ${this.nama}`;
//   }
// }

// class Person1 extends People {
//   constructor(nama, umur, pekerjaan) {
//     super(nama, umur);
//     this.pekerjaan = pekerjaan;
//   }
//   warnaRambut() {
//     return `Nama saya ${this.nama}`;
//   }
// }

// class Person2 extends People {
//   constructor(nama, umur, pekerjaan) {
//     super(nama, umur);
//     this.pekerjaan = pekerjaan;
//   }
//   warnaRambut() {
//     return `Nama saya ${this.nama} \n umur ${this.umur}`;
//   }
// }
// const Orang1 = new Person1("Adit", 123, "Was");
// const Orang2 = new Person2("Dadang", 126663, "Kill");

// console.log(Orang1.warnaRambut());
// console.log(Orang2.warnaRambut());

// ======================================================

function People1(nama, umur) {
  return `nama saya ${nama}, umur ${umur}`;
}
function People2(pekerjaan, ukuranSepatu) {
  return `pekerjaan ${pekerjaan}, ukuran sepatu ${ukuranSepatu}`;
}

function People3(function1, function2) {
  return `${function1} ${function2}`;
}

console.log(People3(People1("Lili", 21), People2("Koder", 42)));
