import { Component, OnInit } from '@angular/core';
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-home-task-of-consultant',
  templateUrl: './home-task-of-consultant.component.html',
  styleUrls: ['./home-task-of-consultant.component.css']
})
export class HomeTaskOfConsultantComponent implements OnInit {

  formGroup!:FormGroup
  listTaskOfConsultants:any=[]
  taskOfConsultants:TaskOfConsultant[]=[]
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
  currentIndex = -1;
  name = '';
  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [6, 12, 18];
  constructor(private taskOfConsultantService:TaskOfConsultantService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getAllTaskOfConsultant()
    this.retrieveTaskOfConsultant()
    this.formGroup=this.formBuilder.group({
      duration:[''],

    })
  }
  CurrentHours(taskOfConsultant:TaskOfConsultant) {
    this.currentTaskOfConsultant.id=taskOfConsultant.id;
    this.formGroup.controls['duration'].setValue(taskOfConsultant.duration)

  }
  getAllTaskOfConsultant(){
    this.taskOfConsultantService.getAllTaskOfConsultant()
      .subscribe(taskOfConsultant=>{
        this.listTaskOfConsultants=taskOfConsultant
      });
  }
  getRequestParams(searchTaskOfConsultant: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTaskOfConsultant) {
      params[`name`] = searchTaskOfConsultant;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveTaskOfConsultant(): void {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);
    this.taskOfConsultantService.getAllTaskWithPagination(params)
      .subscribe(
        response => {
          const { taskOfConsultants, totalItems } = response;
          this.taskOfConsultants = taskOfConsultants;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTaskOfConsultant();
  }
  searchName(event: KeyboardEvent): void {
    this.name=(event.target as HTMLInputElement).value;
    this.page = 1;
    this.retrieveTaskOfConsultant();
  }


  UpdateHours() {
    this.currentTaskOfConsultant.duration=this.formGroup.value.duration;

    console.log( this.currentTaskOfConsultant.duration)
    this.taskOfConsultantService.updateHours(this.currentTaskOfConsultant.id,this.currentTaskOfConsultant.duration)
      .subscribe(resp=>{
        let ref=document.getElementById('Close')
        ref?.click();
        this.formGroup.reset()
        this.retrieveTaskOfConsultant()
      },error => {
        console.log(error)
      })

  }
}
