import { Component, OnInit } from '@angular/core';

import {Consultant} from "../../../models/consultant.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsultantService} from "../../../services/consultant.service";

@Component({
  selector: 'app-single-consultant',
  templateUrl: './single-consultant.component.html',
  styleUrls: ['./single-consultant.component.css']
})
export class SingleConsultantComponent implements OnInit {
  currentConsultant:Consultant={
    consultant_id:0,
    name:'',
    email:'',
    password:'',
    phone:0,
  }
  message='';

  constructor(private router:Router,private route:ActivatedRoute,private service:ConsultantService) { }

  ngOnInit(): void {
    this.getConsultant(this.route.snapshot.params['id']);

  }
  getConsultant(id:number){
    this.service.getConsultant(id).
    subscribe(data=>{
        this.currentConsultant=data;
        console.log(data);
      },error => {
        console.log(error)
      }
    )
  }
  deleteConsultant() {
    this.service.deleteConsultant(this.currentConsultant.consultant_id)
      .subscribe(response=>{
          console.log(response)
          this.router.navigate(['/consultant/listeConsultant'])
        },error => {
          console.log(error);
        }
      )
  }

}
