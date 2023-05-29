const users = [
  { id: 1, username: "lili", address: "jakarta" },
  { id: 2, username: "lala", address: "bandung" },
];
const transaction = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "sedang dikirim" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "di batalkan" },
    ],
  },
];

const detailTransaction = [
  { id: 1, productName: "Kopi Hitam", qty: 3, totalAmount: 3000 },
  { id: 2, productName: "Teh", qty: 3, totalAmount: 2000 },
];

function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.filter((user) => {
        user.username === username;
      });
      if (user) {
        resolve(user);
      } else {
        reject("user not found");
      }
    }, 500);
  });
}

console.log(login("lili"));
// login("lili");
