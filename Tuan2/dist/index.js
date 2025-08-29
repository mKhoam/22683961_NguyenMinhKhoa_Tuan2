// bai1
const promise1 = new Promise((resolve) => { resolve("Hello Async"); });
promise1.then(console.log);

//bai2
function getNumber10() { 
  return new Promise((resolve) => { resolve(10); }); 
}
getNumber10().then(console.log);

//bai3
function rejectPromise() { 
  return new Promise((_, reject) => { reject("Something went wrong"); }); 
}
rejectPromise().catch(console.error);

//bai4
const randomPromise = new Promise((resolve, reject) => { 
  const num = Math.random(); 
  if (num > 0.5) { resolve(num); } 
  else { reject("số quá nhỏ"); } 
});
randomPromise
  .then((num) => console.log("số ngẫu nhiên:", num))
  .catch((err) => console.error(err));

//bai5
function simulateTask(time) { 
  return new Promise((resolve) => { resolve("Task done"); }); 
}
simulateTask().then(console.log);

//bai6
function simulateTask6(time) { 
  return new Promise((resolve) => { resolve("Task done"); }); 
}
simulateTask6().then(console.log);

//bai7
Promise.race([
  Promise.resolve("Fastest Task"),
  Promise.resolve("Slower Task"),
]).then(console.log);

//bai8
Promise.resolve(2)
  .then((n) => n * n)
  .then((n) => n * 2)
  .then((n) => n + 5)
  .then(console.log);

//bai9
const arrPromise = new Promise((resolve) => { 
  const arr = [15, 21, 18, 36, 57, 28]; 
  resolve(arr.filter((x) => x % 2 === 0)); 
});
arrPromise.then(console.log);

//bai10
new Promise((resolve, reject) => { 
  Math.random() > 0.5 ? resolve("Thành công") : reject("Thất bại"); 
})
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("Xong"));
