const arrPromise = new Promise((resolve) => {
  const arr = [15, 21, 18, 36, 57, 28];
  resolve(arr.filter((x) => x % 2 === 0));
});
arrPromise.then(console.log);
