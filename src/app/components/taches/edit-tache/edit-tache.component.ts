import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Task} from "../../../models/tache.model";
import {TacheService} from "../../../services/tache.service";
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css']
})
export class EditTacheComponent implements OnInit {

  project!:Project[]
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
    }

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
        this.project.push(data.project)
        console.log(data);
      },error => {
        console.log(error)
      }
    )
  }
  editTache() {
    const data={
      task_id: this.currentTache.task_id,
      name:this.currentTache.name,
      description: this.currentTache.description,
      project: this.currentTache.project,
    }
    this.tacheService.updateTache(this.currentTache.task_id,data)
      .subscribe(response=>{
        console.log(response)
        this.router.navigate([`/task/single-task/${this.currentTache.task_id}`])
      },error => {
        console.log(error);
      })

  }

  onSelect(project: Project) {
    this.currentTache.project=project
  }
}
