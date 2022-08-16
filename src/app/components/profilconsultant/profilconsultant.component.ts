import { Component, OnInit } from '@angular/core';
import {TaskOfConsultantService} from "../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../models/TaskOfConsultant.models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Project} from "../../models/project.model";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-profilconsultant',
  templateUrl: './profilconsultant.component.html',
  styleUrls: ['./profilconsultant.component.css']
})
export class ProfilconsultantComponent implements OnInit {
  taskOfConsultants:TaskOfConsultant[]=[]
  currentUser: any;

  formGroup!:FormGroup
  currentTaskOfConsultant:TaskOfConsultant={
    id:0,
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
    state:'',
    user:{
      id:0,
      email:'',
      password:'',
      username:'',
      roles:[{
        id:0,
        name:''
      }]
    },
    duration:0
  }
  currentIndex = -1;
  name = '';
  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [6, 12, 18];



  constructor(private taskOfConsultantService:TaskOfConsultantService,private route:ActivatedRoute,private formBuilder:FormBuilder,private storageService: StorageService,private router:Router) {

  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    //this.getTaskOfConsultant(this.currentUser.username)
    this.retrieveTaskOfConsultant()
    this.formGroup=this.formBuilder.group({
      duration:[''],
      state:['']

    })



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
    this.taskOfConsultantService.getTaskOfConsultantByConsultantName(this.currentUser.username,params)
      .subscribe(
        response => {
          const { taskOfConsultants, totalItems } = response;
          this.taskOfConsultants = taskOfConsultants;
          console.log(this.taskOfConsultants)
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



  currentDuration(taskOfConsulatnt: TaskOfConsultant) {
    this.currentTaskOfConsultant.id=taskOfConsulatnt.id
    this.formGroup.controls['duration'].setValue(taskOfConsulatnt.duration)
    this.formGroup.controls['state'].setValue(taskOfConsulatnt.state)
    //this.currentTaskOfConsultant.project_id=project.project_id;
    //this.formGroup.controls['totalHours'].setValue(project.totalHours)

  }


  UpdateHoursANDState() {
    this.currentTaskOfConsultant.duration=this.formGroup.value.duration;
    this.currentTaskOfConsultant.state=this.formGroup.value.state;
    this.taskOfConsultantService.updateHoursAndStates(this.currentTaskOfConsultant.id,this.currentTaskOfConsultant.duration,this.currentTaskOfConsultant.state)
      .subscribe(resp=>{
        let ref=document.getElementById('Close')
        ref?.click();
        this.formGroup.reset()
        // this.getTaskOfConsultant(this.currentUser.username)
        this.retrieveTaskOfConsultant()

      },error => {
        console.log(error)
      })

  }


  goToDetails(taskOfConsulatnt: TaskOfConsultant,idx: any) {

    this.router.navigate(['/consultant/single-taskOfConsultant/'+taskOfConsulatnt.id])
  }
}
