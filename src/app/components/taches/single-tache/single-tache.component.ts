import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Tache} from "../../../models/tache.model";
import {TacheService} from "../../../services/tache.service";

@Component({
  selector: 'app-single-tache',
  templateUrl: './single-tache.component.html',
  styleUrls: ['./single-tache.component.css']
})
export class SingleTacheComponent implements OnInit {

  currentTache:Tache={
    projectname:'',
    tachename:'',
    consultant:'',
    totalHours:0
  }
  message='';
  constructor( private  tacheService:TacheService,
               private router:Router,
               private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTache(this.route.snapshot.params['id']);
  }

  getTache(id:number){
    this.tacheService.getTache(id).
    subscribe(data=>{
        this.currentTache=data;
        console.log(data);
      },error => {
        console.log(error)
      }
    )
  }


  deleteTache() {
    this.tacheService.deleteTache(this.currentTache.id)
      .subscribe(response=>{
          console.log(response)
          this.router.navigate(['/hometaches'])
        },error => {
          console.log(error);
        }
      )
  }
}
