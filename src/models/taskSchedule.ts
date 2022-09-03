export interface ITaskDelegate {
  /**
   * Run the task, promise rejects with error on failure, resolves on success
   */
  (): Promise<void>
}

export interface ITaskSchedule {
  /**
   * space between executions of task in milliseconds
   */
  intervalMs: number
  /**
   * name of task
   */
  name: string
  /**
   * delegate that executes the task
   */
  task: ITaskDelegate
}
