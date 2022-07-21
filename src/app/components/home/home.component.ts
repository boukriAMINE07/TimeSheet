import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProjects:any=[]

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProject()
      .subscribe(project=>{
          this.listProjects=project
        });
  }

}
