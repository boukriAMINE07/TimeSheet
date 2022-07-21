import { Component, OnInit } from '@angular/core';
import {Project} from "../../../models/project.model";
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  project:Project={
    name:'',
    description:'',
    startDate:new Date(),
    endDate:new Date(),
    totalHours:0
  };
  submitted=false;

  constructor( private  projectService:ProjectService ,private router:Router) { }

  ngOnInit(): void {
  }
  saveProject():void{
    const data={
      name:this.project.name,
      description:this.project.description,
      startDate:this.project.startDate,
      endDate:this.project.endDate,
      totalHours: this.project.totalHours
    }
    this.projectService.newProject(data)
                        .subscribe(
                          response=>{
                            console.log(response);
                            this.submitted=true;
                            this.router.navigate(["/home"])
                          },error=>{
                            console.log(error);
                          }
                        );
  }

}
