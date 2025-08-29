function getNumber10() {
  return new Promise((resolve) => {
    resolve(10);
  });
}
getNumber10().then(console.log);
