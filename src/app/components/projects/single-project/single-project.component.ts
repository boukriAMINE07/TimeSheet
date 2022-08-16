import { Component, OnInit } from '@angular/core';
import {Project} from "../../../models/project.model";
import {ProjectService} from "../../../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  currentProject:Project={
    id:0,
    name:'',
    description:'',
    startDate:new Date(),
    endDate:new Date(),
    totalHours:0
  }
  message='';
  constructor( private  projectService:ProjectService,
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


  deleteProject() {
      this.projectService.deleteProject(this.currentProject.id)
                          .subscribe(response=>{
                              console.log(response)
                            this.router.navigate(['/project/home'])
                          },error => {
                            console.log(error);
                            }
                          )
  }
}
