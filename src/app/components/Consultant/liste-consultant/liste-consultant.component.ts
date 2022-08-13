import { Component, OnInit } from '@angular/core';
import {ConsultantService} from "../../../services/consultant.service";
import {Consultant} from "../../../models/consultant.model";
import {User} from "../../../models/User.model";

@Component({
  selector: 'app-liste-consultant',
  templateUrl: './liste-consultant.component.html',
  styleUrls: ['./liste-consultant.component.css']
})
export class ListeConsultantComponent implements OnInit {
  listUsers:any=[]
  users:User[]=[]
  currentIndex = -1;
  name = '';
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  constructor(private service: ConsultantService) { }

  ngOnInit(): void {
    this.service.getAllUsers()
      .subscribe(project=>{
        this.listUsers=project
      });
    this.retrieveConsultants()
  }
  getRequestParams( page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveConsultants(): void {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.service.getAllUsersWithPagination(params)
      .subscribe(
        response => {
          const { users, totalItems } = response;
          this.users = users;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveConsultants();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveConsultants();
  }

  searchConsultant(event: KeyboardEvent): void {
    this.name=(event.target as HTMLInputElement).value;
    this.page = 1;
    this.retrieveConsultants();
  }

}
