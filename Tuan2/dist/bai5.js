function simulateTask(time) {
  return new Promise((resolve) => {
    resolve("Task done");
  });
}
simulateTask().then(console.log);
