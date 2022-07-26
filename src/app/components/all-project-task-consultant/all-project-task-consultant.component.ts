import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {TacheService} from "../../services/tache.service";
import {ConsultantService} from "../../services/consultant.service";

@Component({
  selector: 'app-all-project-task-consultant',
  templateUrl: './all-project-task-consultant.component.html',
  styleUrls: ['./all-project-task-consultant.component.css']
})
export class AllProjectTaskConsultantComponent implements OnInit {
  listProjects: any=[];
  listTasks:any= [];
  listConsultants:any=[]

  constructor(private projectService:ProjectService,private tacheService:TacheService,private consultantService:ConsultantService) { }

  ngOnInit(): void {
    this.getAllProject();
    this.getAllTask();
    this.getAllConsultant();


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

}
