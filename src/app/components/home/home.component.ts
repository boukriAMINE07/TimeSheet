import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import * as ApexCharts from 'apexcharts';
import {Project} from "../../models/project.model";
import {UserService} from "../../services/user.service";

declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
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
  projects:Project[]=[]
  currentIndex = -1;
  name = '';
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];

  constructor(private projectService:ProjectService,private formBuilder:FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({
      totalHours:[''],

    })
    this.retrieveProjects()

    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
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
        this.retrieveProjects()
      },error => {
        console.log(error)
      })
  }

  getRequestParams(searchName: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchName) {
      params[`name`] = searchName;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  retrieveProjects(): void {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);
    this.projectService.getAllProjectWithPagination(params)
      .subscribe(
        response => {
          const { projects, totalItems } = response;
          this.projects = projects;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveProjects();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveProjects();
  }
  searchName(event: KeyboardEvent): void {
    this.name=(event.target as HTMLInputElement).value;
    this.page = 1;
    this.retrieveProjects();
  }

}
