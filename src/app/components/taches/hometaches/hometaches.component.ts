import { Component, OnInit } from '@angular/core';
import {TacheService} from "../../../services/tache.service";
import {Task} from "../../../models/tache.model";

@Component({
  selector: 'app-hometaches',
  templateUrl: './hometaches.component.html',
  styleUrls: ['./hometaches.component.css']
})
export class HometachesComponent implements OnInit {
  listtaches: any=[];
  tasks:Task[]=[]
  currentIndex = -1;
  name = '';
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];

  constructor(private tacheService:TacheService) { }

  ngOnInit(): void {
    this.tacheService.getAllTache()
      .subscribe(task=>{
        this.listtaches=task
      });

    this.retrieveTasks()
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
  retrieveTasks(): void {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);
    this.tacheService.getAllTaskWithPagination(params)
      .subscribe(
        response => {
          const { tasks, totalItems } = response;
          this.tasks = tasks;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  searchName(event: KeyboardEvent): void {
    this.name=(event.target as HTMLInputElement).value;
    this.page = 1;
    this.retrieveTasks();
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTasks();
  }

}
