import { simulateTask } from "./bai5";

export function runRace(success: boolean): Promise<string> {
  return Promise.race([
    simulateTask(1500, success),
    simulateTask(2000, success),
    simulateTask(2500, success),
  ]);
}
