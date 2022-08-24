import { Component, OnInit } from '@angular/core';
import {Project} from "../../../models/project.model";
import {ProjectService} from "../../../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";

declare var jQuery: any;
let performanceTODO: number = 0;
let performanceDONE: number = 0;
let performancePROGRESS: number = 0;

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  nbrToDo: number = 0
  nbrInProgress: number = 0
  nbrDone: number = 0
  totalState: number = 0
  performanceTOOD: number = 0
  performanceDONE: number = 0
  performancePROGRESS: number = 0
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
            this.totalState = this.listTaskOfConsultants.length
            this.calculState(this.listTaskOfConsultants);
            this.taskPerformance()
          })
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
    this.getTotalOfWorkingDays();
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
    }, 200);  //0.2s

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
