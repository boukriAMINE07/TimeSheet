import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {TacheService} from "../../services/tache.service";
import {ConsultantService} from "../../services/consultant.service";
import {TaskOfConsultantService} from "../../services/task-of-consultant.service";

@Component({
  selector: 'app-all-project-task-consultant',
  templateUrl: './all-project-task-consultant.component.html',
  styleUrls: ['./all-project-task-consultant.component.css']
})
export class AllProjectTaskConsultantComponent implements OnInit {
  listProjects: any=[];
  listTasks:any= [];
  listConsultants:any=[]
  listTaskOfConsultants:any=[]

  constructor(private projectService:ProjectService,
              private tacheService:TacheService,
              private consultantService:ConsultantService,
              private taskOfConsultantService:TaskOfConsultantService) { }

  ngOnInit(): void {
    this.getAllProject();
    this.getAllTask();
    this.getAllConsultant();
    this.getAllTaskOfConsultant()

  }
  getAllProject(){
    this.projectService.getAllProject()
      .subscribe(project=>{
        this.listProjects=project

      });
  }
  getAllTask(){
    this.tacheService.getAllTache()
      .subscribe(task=>{
        this.listTasks=task
      });
  }
  getAllConsultant(){
    this.consultantService.getAllConsultants()
      .subscribe(consultant=>{
        this.listConsultants=consultant
      });
  }
  getAllTaskOfConsultant(){
    this.taskOfConsultantService.getAllTaskOfConsultant()
      .subscribe(taskOfConsultant=>{
        this.listTaskOfConsultants=taskOfConsultant
      });
  }


}
