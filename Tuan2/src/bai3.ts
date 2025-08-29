export function failPromise(): Promise<string> {
  return new Promise<string>((_, reject) => {
    reject("Something went wrong");
  });
}
