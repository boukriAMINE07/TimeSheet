import { Component, OnInit } from '@angular/core';
import {TacheService} from "../../../services/tache.service";

@Component({
  selector: 'app-hometaches',
  templateUrl: './hometaches.component.html',
  styleUrls: ['./hometaches.component.css']
})
export class HometachesComponent implements OnInit {
  listtaches: any=[];

  constructor(private tacheService:TacheService) { }

  ngOnInit(): void {
    this.tacheService.getAllTache()
      .subscribe(project=>{
        this.listtaches=project
      });
  }

}
