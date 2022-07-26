import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Project} from "../models/project.model";
const baseUrl="http://localhost:3000/projects"
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  getProjects(){
    return this.http.get<any>(baseUrl).
    pipe(map((project:any)=>{
      return project;
    }))
  }

  getAllProject():Observable<Project[]>{
    return this.http.get<Project[]>(baseUrl);
  }

  getProject(id:any):Observable<Project>{
    return this.http.get(`${baseUrl}/${id}`)
  }


  newProject(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
  updateProject(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  deleteProject(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  updateHours(id:any,totalHours:any):Observable<any>{
    return this.http.patch(`${baseUrl}/${id}`, {totalHours:totalHours});
  }

}
