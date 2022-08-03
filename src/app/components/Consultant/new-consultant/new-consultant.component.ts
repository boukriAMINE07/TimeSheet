import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";
import {Consultant} from "../../../models/consultant.model";
import {ConsultantService} from "../../../services/consultant.service";

@Component({
  selector: 'app-new-consultant',
  templateUrl: './new-consultant.component.html',
  styleUrls: ['./new-consultant.component.css']
})
export class NewConsultantComponent implements OnInit {
  consultant:Consultant={
    consultant_id:0,
    name:'',
    phone:0,
    password:'',
    email:''
  };
  submitted=false;

  constructor( private  consultantService:ConsultantService ,private router:Router) { }

  ngOnInit(): void {
  }
  saveConsultant():void{
    const data={
      name:this.consultant.name,
      tel:this.consultant.phone,
      password:this.consultant.password,
      email:this.consultant.email
    }
    this.consultantService.newConsultant(data)
      .subscribe(
        response=>{
          console.log(response);
          this.submitted=true;
          this.router.navigate(["/consultant/listeConsultant"])
        },error=>{
          console.log(error);
        }
      );
  }

}
