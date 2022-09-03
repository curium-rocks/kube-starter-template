import { ITaskSchedule } from '../models/taskSchedule'

export interface ITaskRunner {
  /**
   * Registers the tasks with the runner for execution, cancels and replaces any previously registered
   * tasks
   * @param tasks Collection of tasks that will be executed at defined intervals
   */
  registerTasks(tasks: ITaskSchedule[]): void
}
export class TaskRunner implements ITaskRunner {
  registerTasks (tasks: ITaskSchedule[]): void {
    throw new Error('Method not implemented.')
  }
}
