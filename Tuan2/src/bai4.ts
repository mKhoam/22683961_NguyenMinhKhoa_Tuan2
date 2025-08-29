export function getRandomNumber(): Promise<number> {
  return new Promise((resolve) => {
    const num = Math.floor(Math.random() * 100);
    resolve(num);
  });
}
