import { Component, OnInit } from '@angular/core';
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";

@Component({
  selector: 'app-home-task-of-consultant',
  templateUrl: './home-task-of-consultant.component.html',
  styleUrls: ['./home-task-of-consultant.component.css']
})
export class HomeTaskOfConsultantComponent implements OnInit {

  listTaskOfConsultants:any=[]
  taskOfConsultants:TaskOfConsultant[]=[]
  currentIndex = -1;
  name = '';
  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [6, 12, 18];
  constructor(private taskOfConsultantService:TaskOfConsultantService) { }

  ngOnInit(): void {
    this.getAllTaskOfConsultant()
    this.retrieveTaskOfConsultant()
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



}
