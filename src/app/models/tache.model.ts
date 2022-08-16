import {Project} from "./project.model";

export interface Task {
  id: number
  name: string
  description: string
  project: Project
}
