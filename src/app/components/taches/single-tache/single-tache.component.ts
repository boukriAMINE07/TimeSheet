import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {TacheService} from "../../../services/tache.service";
import {Task} from "../../../models/tache.model";
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-single-tache',
  templateUrl: './single-tache.component.html',
  styleUrls: ['./single-tache.component.css']
})
export class SingleTacheComponent implements OnInit {

  currentTache:Task={
    task_id:0,
    name:'',
    description:'',
    project:{
      project_id:0,
      name:'',
      description:'',
      startDate:new Date(),
      endDate:new Date(),
      totalHours:0,
    },
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
    this.tacheService.deleteTache(this.currentTache.task_id)
      .subscribe(response=>{
          console.log(response)
          this.router.navigate(['/task/home'])
        },error => {
          console.log(error);
        }
      )
  }
}
