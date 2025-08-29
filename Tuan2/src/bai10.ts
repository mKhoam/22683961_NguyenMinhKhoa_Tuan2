export async function bai10(success: boolean): Promise<void> {
  try {
    const result = await new Promise<string>((resolve, reject) => {
      if (success) {
        resolve("Async/Await success");
      } else {
        reject("Async/Await failed");
      }
    });
    console.log( result);
  } catch (err) {
    console.error( err);
  }
}
