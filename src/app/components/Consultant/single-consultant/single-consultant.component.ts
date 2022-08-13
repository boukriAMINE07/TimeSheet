import { Component, OnInit } from '@angular/core';

import {Consultant} from "../../../models/consultant.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsultantService} from "../../../services/consultant.service";
import {User} from "../../../models/User.model";

@Component({
  selector: 'app-single-consultant',
  templateUrl: './single-consultant.component.html',
  styleUrls: ['./single-consultant.component.css']
})
export class SingleConsultantComponent implements OnInit {
  currentUser:User={
    id:0,
    username:'',
    email:'',
    password:'',
    roles:[]

  }
  message='';

  constructor(private router:Router,private route:ActivatedRoute,private service:ConsultantService) { }

  ngOnInit(): void {
    this.getConsultant(this.route.snapshot.params['id']);

  }
  getConsultant(id:number){
    this.service.getUser(id).
    subscribe(data=>{
        this.currentUser=data;
        console.log(data);
      },error => {
        console.log(error)
      }
    )
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
