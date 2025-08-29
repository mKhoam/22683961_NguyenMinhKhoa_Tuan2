import { simulateTask } from "./bai5";

export function runAllTasks(success: boolean): Promise<string[]> {
  return Promise.all([
    simulateTask(1000, success),
    simulateTask(2000, success),
    simulateTask(3000, success),
  ]);
}
