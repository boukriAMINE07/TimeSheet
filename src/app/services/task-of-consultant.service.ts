import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskOfConsultant} from "../models/TaskOfConsultant.models";


const baseUrl="http://localhost:8080/taskOfConsultant"
@Injectable({
  providedIn: 'root'
})
export class TaskOfConsultantService {

  constructor(private http:HttpClient) { }


  getAllTaskOfConsultant():Observable<TaskOfConsultant[]>{
    return this.http.get<TaskOfConsultant[]>(baseUrl);
  }
  getTaskOfConsultant(id:number):Observable<TaskOfConsultant>{
    return this.http.get<TaskOfConsultant>(`${baseUrl}/${id}`)
  }


  newTaskOfConsultant(data:TaskOfConsultant):Observable<TaskOfConsultant>{
    return this.http.post<TaskOfConsultant>(baseUrl,data);
  }
  updateTaskOfConsultant(id:number,data:TaskOfConsultant):Observable<TaskOfConsultant>{
    return this.http.put<TaskOfConsultant>(`${baseUrl}/${id}`,data);
  }
  deleteTaskOfConsultant(id:number):Observable<TaskOfConsultant>{
    return this.http.delete<TaskOfConsultant>(`${baseUrl}/${id}`);
  }
  updateHours(id:number,duration:number):Observable<TaskOfConsultant>{
    return this.http.patch<TaskOfConsultant>(`${baseUrl}/${id}`, {duration:duration});
  }
  getTaskOfConsultantByConsultantName(name:string):Observable<TaskOfConsultant[]>{
    const params=new HttpParams().set('consultant',name)
    return this.http.get<TaskOfConsultant[]>(`${baseUrl}/searchConsultant`,{params});
  }
  getTaskOfConsultantByTaskName(name:string):Observable<TaskOfConsultant[]>{
    const params=new HttpParams().set('task',name)
    return this.http.get<TaskOfConsultant[]>(`${baseUrl}/searchTask`,{params});
  }
}
