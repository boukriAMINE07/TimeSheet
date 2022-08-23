import { Component, OnInit } from '@angular/core';
import {Project} from "../../../models/project.model";
import {ProjectService} from "../../../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  totalHours:number=0
  totalDays:number=0
  listTaskOfConsultants: TaskOfConsultant[] = []
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
               private taskOfConsultantService:TaskOfConsultantService,
               private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProject(this.route.snapshot.params['id']);
  }

  getProject(id:number){
    this.projectService.getProject(id).
                        subscribe(data=>{
                                    this.currentProject=data;
                                      console.log(data);
                                      this.getTotalOfWorkingDays()
                                    },error => {
                                      console.log(error)
                                    }
                         )
  }

  getTotalOfWorkingDays(){
    console.log("this.currentProject.name   === >>>>>"+this.currentProject.name)
        this.taskOfConsultantService.getAllTaskOfConsultantByProjectName(this.currentProject.name)
          .subscribe(task=>{
            this.listTaskOfConsultants=task
            console.log( this.listTaskOfConsultants)
            this.calculDayOfWorks(this.listTaskOfConsultants)
          })
  }


  calculDayOfWorks(tasks:TaskOfConsultant[]){
    tasks.forEach(task=>{
      this.totalHours+=task.duration
    })
    this.totalDays=this.float2int(this.totalHours/8);
  }
  float2int(value: number) {
    return value | 0;
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
