import {Consultant} from "./consultant.model";
import {Task} from "../models/tache.model";
import {User} from "./User.model";

export interface TaskOfConsultant{
  id: number
  user: User
  task: Task
  duration: number
  state:string
  startDate?:string
  endDate?:string
}
