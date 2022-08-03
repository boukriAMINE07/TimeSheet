import {Project} from "./project.model";

export interface Task {
  task_id: number
  name: string
  description: string
  project: Project
}
