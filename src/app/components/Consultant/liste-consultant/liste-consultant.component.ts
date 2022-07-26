import { Component, OnInit } from '@angular/core';
import {ConsultantService} from "../../../services/consultant.service";

@Component({
  selector: 'app-liste-consultant',
  templateUrl: './liste-consultant.component.html',
  styleUrls: ['./liste-consultant.component.css']
})
export class ListeConsultantComponent implements OnInit {
  listConsultant:any=[]

  constructor(private service: ConsultantService) { }

  ngOnInit(): void {
    this.service.getAllConsultants()
      .subscribe(project=>{
        this.listConsultant=project
      });
  }

}
