export function simulateTask(time: number, success: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve(`Task finished in ${time}ms`);
      else reject(`Task failed in ${time}ms`);
    }, time);
  });
}
