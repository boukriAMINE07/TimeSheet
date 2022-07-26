import { Component, OnInit } from '@angular/core';
import {Consultant} from "../../../../models/consultant.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ConsultantService} from "../../../../services/consultant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  consultantobj:Consultant=new Consultant();
  NewConsultantFormGroup!:FormGroup;

  constructor(private fb:FormBuilder,private service:ConsultantService,private router:Router) { }

  ngOnInit(): void {
    this.NewConsultantFormGroup=this.fb.group({
      name:[''],
      tel:[''],
      email:[''],
      password:['']
    });
  }
  handleSaveConsultant() {
    this.consultantobj.name=this.NewConsultantFormGroup.value.name;
    this.consultantobj.tel=this.NewConsultantFormGroup.value.tel;
    this.consultantobj.email=this.NewConsultantFormGroup.value.email;
    this.consultantobj.password=this.NewConsultantFormGroup.value.password;
    this.service.saveConsultant(this.consultantobj).subscribe({
      next:(v)=>{console.log(v)},
      error:(e)=>{
        alert("error")
          console.log(e)},
      complete:()=>{
        console.log('complete')
        alert("Consultant Saved")
        this.router.navigate(['/consultant/listeConsultant'])


      }

    })


  }

}
