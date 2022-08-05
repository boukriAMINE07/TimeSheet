import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TacheService} from "../../../services/tache.service";
import {Task} from "../../../models/tache.model";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-formtache',
  templateUrl: './formtache.component.html',
  styleUrls: ['./formtache.component.css']
})
export class FormtacheComponent implements OnInit {
  tache:Task={
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
  };
  project!:Project[]
  submitted=false;
  selectedproject!: Project;


  constructor(private  tacheService:TacheService,private projectService:ProjectService,private router:Router) { }

  ngOnInit(): void {

    this.projectService.getAllProject()
      .subscribe(project=>{
        this.project=project

      });
  }


  saveTache():void{
    const data={
      task_id: this.tache.task_id,
      name:this.tache.name,
      description: this.tache.description,
      project: this.tache.project,
    }
    this.tacheService.newTache(data)
      .subscribe(
        response=>{
          console.log(response);
          this.submitted=true;
          this.router.navigate(["/task/home"])
        },error=>{
          console.log(error);
        }
      );
  }

  onSelect(project: Project) {
    console.log(project)
    this.tache.project=project;
  }
}
