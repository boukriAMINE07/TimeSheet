import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {TacheService} from "../../services/tache.service";
import {ConsultantService} from "../../services/consultant.service";
import {TaskOfConsultantService} from "../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../models/TaskOfConsultant.models";
import {Consultant} from "../../models/consultant.model";
import {User} from "../../models/User.model";

let performanceDONE: number = 0;

@Component({
  selector: 'app-all-project-task-consultant',
  templateUrl: './all-project-task-consultant.component.html',
  styleUrls: ['./all-project-task-consultant.component.css']
})
export class AllProjectTaskConsultantComponent implements OnInit {


  listProjects: any=[];
  listTasks:any= [];
  listConsultants:Consultant[]=[]
  listUserConsultant:User[]=[]
  performanceDONE: number = 0
  listTaskOfConsultants:any=[]
  totalState: number = 0
  nbrConsultant:number=0
  nbrDone: number = 0

  constructor(private projectService:ProjectService,
              private tacheService:TacheService,
              private consultantService:ConsultantService,
              private taskOfConsultantService:TaskOfConsultantService) { }

  ngOnInit(): void {
    this.getAllProject();
    this.getAllTask();
    this.getAllConsultant();
    this.getAllTaskOfConsultant()
    this.totalConsultant()

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
  totalConsultant(){
    this.consultantService.getAllUsers()
      .subscribe(consultant=>{

        this.listUserConsultant=consultant
        console.log("this.listUserConsultant=consultant" +this.listUserConsultant)
        this.nbrConsultant=this.listUserConsultant.length


      });

  }


  getAllTaskOfConsultant() {
    this.taskOfConsultantService.getAllTaskOfConsultant()
      .subscribe(taskOfConsultant => {
        this.listTaskOfConsultants = taskOfConsultant
        //console.log(this.listTaskOfConsultants)
        this.totalState = this.listTaskOfConsultants.length
        this.calculState(this.listTaskOfConsultants);
        this.taskPerformance()

      });


  }

  calculState(liste: TaskOfConsultant[]) {
    liste.forEach(task => {
       if (task.state === 'DONE') {
        this.nbrDone++
      }


    })
  }

  taskPerformance() {

    this.performanceDONE = this.float2int((this.nbrDone * 100) / this.totalState);
    performanceDONE = this.performanceDONE
    console.log("performanceDONE :   " + performanceDONE)

  }
  float2int(value: number) {
    return value | 0;
  }


}
