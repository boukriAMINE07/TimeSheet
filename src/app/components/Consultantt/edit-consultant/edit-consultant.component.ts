import { Component, OnInit } from '@angular/core';
import {Consultant} from "../../../models/consultant.model";
import {ConsultantService} from "../../../services/consultant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-consultant',
  templateUrl: './edit-consultant.component.html',
  styleUrls: ['./edit-consultant.component.css']
})
export class EditConsultantComponent implements OnInit {
  currentConsultant:Consultant={
    name:'',
    email:'',
    password:'',
    tel:'',
  }

  constructor(private service:ConsultantService,private router:Router,private route:ActivatedRoute) { }

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
  editConsultant() {
    const data={
      name:this.currentConsultant.name,
      tel:this.currentConsultant.tel,
      password:this.currentConsultant.password,
      email:this.currentConsultant.email,

    }
    this.service.updateConsultant(this.currentConsultant.id,data)
      .subscribe(response=>{
        console.log(response)
        this.router.navigate([`/consultant/singleConsultant/${this.currentConsultant.id}`])
      },error => {
        console.log(error);
      })

  }

}
