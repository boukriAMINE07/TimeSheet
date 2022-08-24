import { Component, OnInit } from '@angular/core';

import {Consultant} from "../../../models/consultant.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsultantService} from "../../../services/consultant.service";
import {User} from "../../../models/User.model";
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";

declare var jQuery: any;
let performanceTODO: number = 0;
let performanceDONE: number = 0;
let performancePROGRESS: number = 0;
@Component({
  selector: 'app-single-consultant',
  templateUrl: './single-consultant.component.html',
  styleUrls: ['./single-consultant.component.css']
})
export class SingleConsultantComponent implements OnInit {
  roles: string[] = [];

  isAdmin = false;
  listTaskOfConsultants: TaskOfConsultant[] = []
  nbrToDo: number = 0
  nbrInProgress: number = 0
  nbrDone: number = 0
  totalState: number = 0
  performanceTOOD: number = 0
  performanceDONE: number = 0
  performancePROGRESS: number = 0
  currentUser:User={
    id:0,
    username:'',
    email:'',
    password:'',
    phone:0,
    roles:[]

  }
  message='';

  constructor(private router:Router,private route:ActivatedRoute,private service:ConsultantService,private taskOfConsultantService: TaskOfConsultantService) { }

  ngOnInit(): void {
    this.getConsultant(this.route.snapshot.params['id']);



  }
  getConsultant(id:number){
    this.service.getUser(id).
    subscribe(data=>{
        this.currentUser=data;
        this.currentUser.roles.forEach(role=>{
          console.log(role.name)
        if(role.name==="ROLE_ADMIN"){
          this.isAdmin=true
        }else{
          this.isAdmin=false
        }
      })
        this.getAllTaskOfConsultant()

        console.log(data);
      },error => {
        console.log(error)
      }
    )
  }

  getAllTaskOfConsultant() {
    console.log("this.currentUser.username  ==>>>> "+this.currentUser.username)
    this.taskOfConsultantService.getAllTaskOfConsultantByConsultantName(this.currentUser.username)
      .subscribe(taskOfConsultant => {
        this.listTaskOfConsultants = taskOfConsultant
        console.log(this.listTaskOfConsultants)
        this.totalState = this.listTaskOfConsultants.length
        this.calculState(this.listTaskOfConsultants);
        this.taskPerformance()

      });


  }

  calculState(liste: TaskOfConsultant[]) {
    liste.forEach(task => {
      if (task.state === 'TODO') {
        this.nbrToDo++
      } else if (task.state === 'DONE') {
        this.nbrDone++
      } else this.nbrInProgress++


    })
  }
  float2int(value: number) {
    return value | 0;
  }

  taskPerformance() {
    this.performanceTOOD = this.float2int((this.nbrToDo * 100) / this.totalState);
    this.performancePROGRESS = this.float2int((this.nbrInProgress * 100) / this.totalState);
    this.performanceDONE = this.float2int((this.nbrDone * 100) / this.totalState);
    performanceDONE = this.performanceDONE
    console.log("performanceDONE :   " + performanceDONE)
    performanceTODO = this.performanceTOOD
    console.log("performanceTODO :  " + performanceTODO)
    performancePROGRESS = this.performancePROGRESS
    console.log("performancePROGRESS : " + performancePROGRESS)
  }
  ngAfterViewInit() {

    setTimeout(() => {
      (function ($) {
        $(document).ready((() => {

          if ($("#perfomanceChart").length) {
            var options = {
              series: [performanceDONE, performancePROGRESS, performanceTODO],
              chart: {
                height: 320,
                type: 'radialBar',
              },
              colors: ['#28a745', '#ffc107', '#dc3545'],
              stroke: {
                lineCap: "round",
              },
              plotOptions: {

                radialBar: {
                  startAngle: -168,
                  endAngle: -450,
                  hollow: {

                    size: '55%',
                  },
                  track: {

                    background: 'transaprent',
                  },
                  dataLabels: {
                    show: false,

                  }
                }
              },

            };
            var chart = new ApexCharts(document.querySelector("#perfomanceChart"), options);
            chart.render();

          }

        }));
      })(jQuery);
    }, 500);  //0.5s

  }

  deleteConsultant() {
    this.service.deleteUser(this.currentUser.id)
      .subscribe(response=>{
          console.log(response)
          this.router.navigate(['/consultant/listeConsultant'])
        },error => {
          console.log(error);
        }
      )
  }

}
