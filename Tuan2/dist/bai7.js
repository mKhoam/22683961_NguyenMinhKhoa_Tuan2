Promise.race([
  Promise.resolve("Fastest Task"),
  Promise.resolve("Slower Task"),
]).then(console.log);
