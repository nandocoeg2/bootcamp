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

function auth(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.filter((item) => item.username === username));
    }, 500);
  });
}

function getTransaction(user_id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        transaction.filter((item) => item.user_id === user_id)[0].transaction
      );
    }, 500);
  });
}

function getDetailsData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(detailTransaction.filter((item) => item.id === id)[0]);
    }, 500);
  });
}

async function getData(username) {
  const user = await auth(username);
  const transaction = await getTransaction(user[0].id);
  const detailTransaction = await getDetailsData(transaction[0].id);
  console.log(detailTransaction);
}

getData("lili");
