import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Task} from "../models/tache.model";

const baseUrl="http://localhost:8080/tasks"


@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }
  getTaches(){
    return this.http.get<Task>(baseUrl).
    pipe(map((tache:Task)=>{
      return tache;
    }))
  }

  getAllTache():Observable<Task[]>{
    return this.http.get<Task[]>(baseUrl);
  }
  getAllTacheByProject(projectName:string):Observable<Task[]>{
    const params=new HttpParams().set('name',projectName)
    return this.http.get<Task[]>(`${baseUrl}/search`,{params});
  }

  getTache(id:any):Observable<Task>{
    return this.http.get<Task>(`${baseUrl}/${id}`)
  }

  newTache(data:Task):Observable<Task> {
    return this.http.post<Task>(baseUrl,data);
  }

  updateTache(id:number,data:Task):Observable<Task>{
    return this.http.put<Task>(`${baseUrl}/${id}`,data);
  }
  deleteTache(id:number):Observable<Task>{
    return this.http.delete<Task>(`${baseUrl}/${id}`);
  }

  getAllTaskWithPagination(params:any):Observable<any>{
    return this.http.get<any>(baseUrl+'/pageTasks', { params });
  }
}
