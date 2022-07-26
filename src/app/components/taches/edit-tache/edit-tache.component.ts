import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Tache} from "../../../models/tache.model";
import {TacheService} from "../../../services/tache.service";

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css']
})
export class EditTacheComponent implements OnInit {

  currentTache:Tache={
    projectname:'',
    tachename:'',
    consultant:'',
    totalHours:0
  };
  constructor(private  tacheService:TacheService,
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
  editTache() {
    const data={
      projectname:this.currentTache.projectname,
      tachename:this.currentTache.tachename,
      consultant:this.currentTache.consultant,
      totalHours:this.currentTache.totalHours
    }
    this.tacheService.updateTache(this.currentTache.id,data)
      .subscribe(response=>{
        console.log(response)
        this.router.navigate([`single-tache/${this.currentTache.id}`])
      },error => {
        console.log(error);
      })

  }

}
