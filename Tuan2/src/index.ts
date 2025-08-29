import { myPromise } from "./bai1";
import { getNumber } from "./bai2";
import { failPromise } from "./bai3";
import { getRandomNumber} from "./bai4";
import { simulateTask } from "./bai5";
import { runAllTasks } from "./bai6";
import { runRace } from "./bai7";
import { chainPromise } from "./bai8";
import { filterEvenNumber } from "./bai9";
import { bai10 } from "./bai10";

async function main() {
  // Bài 1
  // console.log("Bài 1");
  // console.log(await myPromise);

  // Bài 2 
  // console.log("Bài 2");
  // console.log(await getNumber());

  // Bài 3
  // console.log("Bài 3");
  // try {
  //   await failPromise();
  // } catch (err) {
  //   console.error(err);
  // }

  // Bài 4
  // console.log("Bài 4");
  // const random = await getRandomNumber();
  // console.log("Số ngẫu nhiên:", random);

  // Bài 5
  // console.log("Bài 5");
  // try {
  //   console.log(await simulateTask(1000, true));   
  //   console.log(await simulateTask(1000, false));  
  // } catch (err) {
  //   console.error("Lỗi Bài 5:", err);
  // }

  // Bài 6
  // console.log("Bài 6");
  // try {
  //   console.log(await runAllTasks(true));
  //   console.log(await runAllTasks(false));
  // } catch (err) {
  //   console.error(err); 
  // }

  // Bài 7
  // console.log("Bài 7");
  // try {
  //   console.log(await runRace(true));   
  //   console.log(await runRace(false));  
  // } catch (err) {
  //   console.error(err);
  // }

  // Bài 8
   console.log("Bài 8");
   console.log(await chainPromise());

  // Bài 9
   console.log("Bài 9");
   console.log(await filterEvenNumber([13, 25, 32, 46, 54, 67]));

  // Bài 10
   console.log("Bài 10");
   await bai10(true);
   await bai10(false);
}

main();
