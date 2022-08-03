import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Project} from "../models/project.model";
const baseUrl="http://localhost:8080/projects"
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
    return this.http.get<Project>(`${baseUrl}/${id}`)
  }


  newProject(data:Project):Observable<Project>{
    return this.http.post<Project>(baseUrl,data);
  }
  updateProject(id:number,data:Project):Observable<Project>{
    return this.http.put<Project>(`${baseUrl}/${id}`,data);
  }
  deleteProject(id:number):Observable<Project>{
    return this.http.delete<Project>(`${baseUrl}/${id}`);
  }
  updateHours(id:number,totalHours:number):Observable<Project>{
    return this.http.patch<Project>(`${baseUrl}/${id}`, {totalHours:totalHours});
  }

}
