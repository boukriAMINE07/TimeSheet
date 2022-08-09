import { Component, OnInit } from '@angular/core';
import {TaskOfConsultantService} from "../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../models/TaskOfConsultant.models";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Project} from "../../models/project.model";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-profilconsultant',
  templateUrl: './profilconsultant.component.html',
  styleUrls: ['./profilconsultant.component.css']
})
export class ProfilconsultantComponent implements OnInit {
  currentUser: any;
  tasksOfConsultantsByName:any=[]
  NameOfConsultant!:string
  formGroup!:FormGroup
  currentTaskOfConsultant:TaskOfConsultant={
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


  constructor(private taskOfConsultantService:TaskOfConsultantService,private route:ActivatedRoute,private formBuilder:FormBuilder,private storageService: StorageService) {
    this.route.queryParams.subscribe(params => {

      this.NameOfConsultant = params['consultant'];
      console.log(this.NameOfConsultant)

    });
  }

  ngOnInit(): void {

    this.getTaskOfConsultant(this.NameOfConsultant)
    this.formGroup=this.formBuilder.group({
      duration:[''],

    })

    this.currentUser = this.storageService.getUser();
  }

  getTaskOfConsultant( name:string){
        this.taskOfConsultantService.getTaskOfConsultantByConsultantName(name)
                .subscribe(taskOfConsultant=>{
                  this.tasksOfConsultantsByName=taskOfConsultant

                  this.NameOfConsultant= this.tasksOfConsultantsByName[0].consultant.name
                },error=>{
                  console.log(error)
               })

  }

  currentDuration(taskOfConsulatnt: TaskOfConsultant) {
    this.currentTaskOfConsultant.id=taskOfConsulatnt.id
    this.formGroup.controls['duration'].setValue(taskOfConsulatnt.duration)
    //this.currentTaskOfConsultant.project_id=project.project_id;
    //this.formGroup.controls['totalHours'].setValue(project.totalHours)

  }


  UpdateHours() {
    this.currentTaskOfConsultant.duration=this.formGroup.value.duration;
    this.taskOfConsultantService.updateHours(this.currentTaskOfConsultant.id,this.currentTaskOfConsultant.duration)
                                .subscribe(resp=>{
                                  let ref=document.getElementById('Close')
                                  ref?.click();
                                  this.formGroup.reset()
                                  this.getTaskOfConsultant(this.NameOfConsultant)

                                },error => {
                                  console.log(error)
                                })

  }

}
