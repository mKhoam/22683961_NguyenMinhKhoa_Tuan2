function rejectPromise() {
  return new Promise((_, reject) => {
    reject("Something went wrong");
  });
}
rejectPromise().catch(console.error);
