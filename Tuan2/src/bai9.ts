export function filterEvenNumber(arr: number[]): Promise<number[]> {
  return Promise.resolve(arr.filter(num => num % 2 === 0));
}
