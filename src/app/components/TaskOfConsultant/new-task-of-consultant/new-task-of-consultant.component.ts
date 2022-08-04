import { Component, OnInit } from '@angular/core';
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";
import {Task} from "../../../models/tache.model";
import {Consultant} from "../../../models/consultant.model";
import {TacheService} from "../../../services/tache.service";
import {ConsultantService} from "../../../services/consultant.service";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../models/project.model";
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-task-of-consultant',
  templateUrl: './new-task-of-consultant.component.html',
  styleUrls: ['./new-task-of-consultant.component.css']
})
export class NewTaskOfConsultantComponent implements OnInit {

  taskOfConsultant:TaskOfConsultant={
    id:0,
    task:{
      task_id:0,
      name:'',
      description:'',
      project:{
        project_id:0,
        name:'',
        description:'',
        startDate:new Date(),
        endDate:new Date(),
        totalHours:0,
      }
    },
    consultant:{
      consultant_id:0,
      name:'',
      email:'',
      password:'',
      phone:0,
    },
    duration:0
  }
  task!:Task[]
  consultant!:Consultant[]
  project!:Project[]
  Choisseproject: boolean=true;
  constructor(private  tacheService:TacheService,
              private consultantService:ConsultantService,
              private projectService:ProjectService,
              private taskOfConsultantService:TaskOfConsultantService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllProject()
    this.getAllConsultant()

  }

  getAllProject(){
    this.projectService.getAllProject()
      .subscribe(project=>{
        this.project=project
      });
  }


  getAllTask(name:string){
    this.tacheService.getAllTacheByProject(name)
      .subscribe(task=>{
        this.task=task
      });
  }
  getAllConsultant(){
    this.consultantService.getAllConsultants()
      .subscribe(consultant=>{
        this.consultant=consultant
      });
  }

  onSelectTask(task: Task) {
        this.taskOfConsultant.task=task
  }

  onSelectConsultant(consultant: Consultant) {
        this.taskOfConsultant.consultant=consultant
  }

  saveTaskOfConsultant() {

    const data={
      id: this.taskOfConsultant.id,
      task:this.taskOfConsultant.task,
      consultant: this.taskOfConsultant.consultant,
      duration: this.taskOfConsultant.duration,

    }
    this.taskOfConsultantService.newTaskOfConsultant(data)
      .subscribe(
        response=>{
          console.log(response);
          this.router.navigate(["/task/home"])
        },error=>{
          console.log(error);
        }
      );
  }

  onSelectProject(project: Project) {
    console.log(project)
        this.taskOfConsultant.task.project=project
        this.getAllTask(project.name)
        this.Choisseproject=false


  }
}
