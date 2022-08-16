import { Component, OnInit } from '@angular/core';
import {Project} from "../../../models/project.model";
import {ProjectService} from "../../../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  currentProject:Project={
    id:0,
    name:'',
    description:'',
    startDate:new Date(),
    endDate:new Date(),
    totalHours:0
  };
  constructor(private  projectService:ProjectService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProject(this.route.snapshot.params['id']);
  }

  getProject(id:number){
    this.projectService.getProject(id).
    subscribe(data=>{
        this.currentProject=data;
        console.log(data);
      },error => {
        console.log(error)
      }
    )
  }
  editProject() {
    const data={
      id: this.currentProject.id,
      name:this.currentProject.name,
      description:this.currentProject.description,
      startDate:this.currentProject.startDate,
      endDate:this.currentProject.endDate,
      totalHours:this.currentProject.totalHours
    }
    this.projectService.updateProject(this.currentProject.id,data)
                      .subscribe(response=>{
                        console.log(response)
                        this.router.navigate([`/project/single-project/${this.currentProject.id}`])
                      },error => {
                        console.log(error);
                      })

  }
}
