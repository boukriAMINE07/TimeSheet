import { Component, OnInit } from '@angular/core';
import {Consultant} from "../../../models/consultant.model";
import {ConsultantService} from "../../../services/consultant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../models/User.model";

@Component({
  selector: 'app-edit-consultant',
  templateUrl: './edit-consultant.component.html',
  styleUrls: ['./edit-consultant.component.css']
})
export class EditConsultantComponent implements OnInit {
  currentUser:User={
    id:0,
    username:'',
    email:'',
    password:'',
    phone:0,
    roles:[]

  }

  constructor(private service:ConsultantService,private router:Router,private route:ActivatedRoute) { }

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
  editConsultant() {
    const data={
      id: this.currentUser.id,
      username:this.currentUser.username,
      email:this.currentUser.email,
    }
    this.service.updateConsultant(this.currentUser.id,data)
      .subscribe(response=>{
        console.log(response)
        this.router.navigate([`/consultant/singleConsultant/${this.currentUser.id}`])
      },error => {
        console.log(error);
      })

  }

}
