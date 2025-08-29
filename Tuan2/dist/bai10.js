new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("Thành công") : reject("Thất bại");
})
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("Xong"));
