const randomPromise = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num > 0.5) {
    resolve(num); 
  } else {
    reject("số quá nhỏ"); 
  }
});
randomPromise
  .then((num) => console.log("số ngẫu nhiên:", num))
  .catch((err) => console.error(err));
