import {Consultant} from "./consultant.model";
import {Task} from "../models/tache.model";

export interface TaskOfConsultant{
  id: number
  consultant: Consultant
  task: Task
  duration: number
}
