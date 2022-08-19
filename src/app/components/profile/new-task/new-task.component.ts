import { Component, OnInit } from '@angular/core';
import {TaskOfConsultant} from "../../../models/TaskOfConsultant.models";
import {Task} from "../../../models/tache.model";
import {User} from "../../../models/User.model";
import {Project} from "../../../models/project.model";
import {TacheService} from "../../../services/tache.service";
import {UserService} from "../../../services/user.service";
import {ProjectService} from "../../../services/project.service";
import {TaskOfConsultantService} from "../../../services/task-of-consultant.service";
import {Router} from "@angular/router";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  currentUser: any;
  taskOfConsultant:TaskOfConsultant={
    id:0,
    task:{
      id:0,
      name:'',
      description:'',
      project:{
        id:0,
        name:'',
        description:'',
        startDate:new Date(),
        endDate:new Date(),
        totalHours:0,
      }
    },
    state:'TODO',
    user:{
      id:0,
      email:'',
      password:'',
      phone:0,
      username:'',
      roles:[{
        id:0,
        name:''
      }]
    },
    duration:0
  }
  task!:Task[]
  user!:User
  project!:Project[]
  selectedtask!:Task
  selectedUser!:User
  selectedproject!:Project
  Choisseproject: boolean=true;
  constructor(private  tacheService:TacheService,
              private userService:UserService,
              private projectService:ProjectService,
              private taskOfConsultantService:TaskOfConsultantService,
              private router:Router,private storageService: StorageService) { }

  ngOnInit(): void {
    this.getAllProject()

    this.currentUser = this.storageService.getUser();
    let id=this.currentUser.id
    this.getConsultant()



  }

  getAllProject(){
    this.projectService.getAllProject()
      .subscribe(project=>{
        this.project=project
        this.selectedproject=this.project[0]
        this.taskOfConsultant.task.project=this.selectedproject

      });
  }


  getAllTask(name:string){
    this.tacheService.getAllTacheByProject(name)
      .subscribe(task=>{
        this.task=task
        if (this.task.length===0){
          this.Choisseproject=true
        }else {
          this.selectedtask=this.task[0]
          this.taskOfConsultant.task=this.selectedtask}

      });
  }
  getConsultant(){
    this.userService.getUser(this.currentUser.id)
      .subscribe(user=>{
        this.taskOfConsultant.user=user
      }
      );

  }

  onSelectTask(task: Task) {
    console.log(task)
    this.taskOfConsultant.task=task
  }



  saveTaskOfConsultant() {

    const data={
      id: this.taskOfConsultant.id,
      task:this.taskOfConsultant.task,
      state:this.taskOfConsultant.state,
      user: this.taskOfConsultant.user,
      duration: this.taskOfConsultant.duration,


    }
    this.taskOfConsultantService.newTaskOfConsultant(data)
      .subscribe(
        response=>{
          console.log(response);
          let ref = document.getElementById('btnClose')
          ref?.click();
          window.location.reload()
        },error=>{
          console.log(error);
        }
      );
  }

  onSelectProject(project: Project) {

    console.log(project)
    this.taskOfConsultant.task.project=project
    this.getAllTask(project.name)
    this.Choisseproject=false


  }

  changeState(event: any) {

    this.taskOfConsultant.state=event.target.value
  }

}
