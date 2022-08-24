import { Component, OnInit } from '@angular/core';
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../../../models/User.model";

@Component({
  selector: 'app-single-task-of-consultant',
  templateUrl: './single-task-of-consultant.component.html',
  styleUrls: ['./single-task-of-consultant.component.css']
})
export class SingleTaskOfConsultantComponent implements OnInit {

  roles: string[] = [];

  isAdmin = false;
  currentTaskOfConsultant:TaskOfConsultant={
    id:0,
    state:'',
    task:{
      id:0,
      name:'',
      description:'',
      project:{
        id:0,
        name:'',
        description:'',
        startDate:new Date(),
        endDate:new Date(),
        totalHours:0,
      }
    },
    user:{
      id:0,
      email:'',
      password:'',
      username:'',
      phone:0,
      roles:[{
        id:0,
        name:''
      }]
    },
    duration:0
  }
  constructor(private taskOfConsultantService:TaskOfConsultantService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTAskOfConsultantt(this.route.snapshot.params['id']);

  }
  getTAskOfConsultantt(id:number){
    this.taskOfConsultantService.getTaskOfConsultant(id).
    subscribe(data=>{
        this.currentTaskOfConsultant=data;
        console.log(data);
      },error => {
        console.log(error)
      }
    )
  }

  deleteTaskOfConsultant() {
    this.taskOfConsultantService.deleteTaskOfConsultant(this.currentTaskOfConsultant.id)
      .subscribe(response=>{
          console.log(response)
          this.router.navigate(['/consultant/TaskOfConsultant'])
        },error => {
          console.log(error);
        }
      )
  }
}
