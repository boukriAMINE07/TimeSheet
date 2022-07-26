import { Component, OnInit } from '@angular/core';
import {Tache} from "../../../models/tache.model";
import {Router} from "@angular/router";
import {TacheService} from "../../../services/tache.service";

@Component({
  selector: 'app-formtache',
  templateUrl: './formtache.component.html',
  styleUrls: ['./formtache.component.css']
})
export class FormtacheComponent implements OnInit {
  tache:Tache={
    projectname:'',
    tachename:'',
    consultant:'',
    totalHours:0
  };
  submitted=false;

  constructor(private  tacheService:TacheService ,private router:Router) { }

  ngOnInit(): void {
  }


  saveTache():void{
    const data={
      projectname:this.tache.projectname,
      tachename: this.tache.tachename,
      consultant: this.tache.consultant,
      totalHours: this.tache.totalHours
    }
    this.tacheService.newTache(data)
      .subscribe(
        response=>{
          console.log(response);
          this.submitted=true;
          this.router.navigate(["/task/home"])
        },error=>{
          console.log(error);
        }
      );
  }
}
