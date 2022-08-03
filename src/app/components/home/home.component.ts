import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import * as ApexCharts from 'apexcharts';
import {Project} from "../../models/project.model";

declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProjects:any=[]
  totalHours: any;
  formGroup!:FormGroup
  currentProject:Project={
    project_id:0,
    name:'',
    description:'',
    startDate:new Date(),
    endDate:new Date(),
    totalHours:0
  };

  constructor(private projectService:ProjectService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({
      totalHours:[''],

    })
    this.allProject()
  }
  allProject(){
    this.projectService.getAllProject()
      .subscribe(project=>{
        this.listProjects=project

      });
  }




  ngAfterViewInit() {

    (function ($) {
      $(document).ready( (function() {

        // Menu toggle for admin dashboard
        // Default Tooltip

// Perfomance Chart

        if ($("#perfomanceChart").length) {
          var options = {
            series: [100, 78, 89],
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


                  background: 'transaprent',},
                dataLabels: {
                  show: false,

                }
              }
            },

          };
          var chart = new ApexCharts(document.querySelector("#perfomanceChart"), options);
          chart.render();

        }



// offcanvas




      }));
    })(jQuery);

  }
  CurrentHours(project: Project) {
    this.currentProject.project_id=project.project_id;
    this.formGroup.controls['totalHours'].setValue(project.totalHours)

  }

  UpdateHours() {
    this.currentProject.totalHours=this.formGroup.value.totalHours;

    console.log( this.currentProject.totalHours)
    this.projectService.updateHours(this.currentProject.project_id,this.currentProject.totalHours)
      .subscribe(resp=>{
        let ref=document.getElementById('Close')
        ref?.click();
        this.formGroup.reset()
        this.allProject()
      },error => {
        console.log(error)
      })
  }

}
