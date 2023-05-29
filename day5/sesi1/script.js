console.log("hello");

// callback
function tambah(param1, param2) {
  return param1 + param2;
}

function kurang(param1, param2) {
  return param1 - param2;
}

function kombinasi(param1, param2, param3) {
  return param1 - param2 + param3;
}

function hitung(param1, param2, param3, action) {
  let res = 0;
  res = action(param1, param2, param3);
  return res;
}

console.log(hitung(2, 4, 2, tambah));
console.log(hitung(2, 4, 2, kurang));

// promise then
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hitung = 5 + 3;
    resolve(hitung);
  }, 500);
});

p.then((val) => {
  console.log("resolve ==>", val);
});

const q = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hitung = 5 + 3;
    reject(hitung);
  }, 500);
});

q.then(
  // resolve
  (val) => {
    return val;
  },
  //   reject
  (val) => {
    console.log("reject ==>", val);
  }
);

// async await
async function hitungAsync(params) {
  //   let p = await Promise.resolve("hello async");
  //   return p;

  const q = await new Promise((resolve, reject) => {
    const hitung = 8 + 3;
    resolve(hitung);
  });
  //   return q;
  console.log(q);
}

hitungAsync();
