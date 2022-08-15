import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Project} from "../models/project.model";
import {Consultant} from "../models/consultant.model";
import {User} from "../models/User.model";

const baseUrl="http://localhost:8080/users"

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http:HttpClient) { }
  public saveConsultant(consultant:Consultant):Observable<Consultant>{
    return this.http.post<Consultant>(baseUrl,consultant).pipe(map((res:any)=> {
      return res
    }));
  }
  getConsultants(){
    return this.http.get<any>(baseUrl).
    pipe(map((consultant:any)=>{
      return consultant;
    }))
  }
  getAllConsultants():Observable<Consultant[]>{
    return this.http.get<Consultant[]>(baseUrl);
  }
  getAllUsers():Observable<any>{
    return this.http.get<any>("http://localhost:8080/users/usersByRole?userRole=ROLE_USER");
  }
  getAllUsersWithPagination(params:any):Observable<any>{
    return this.http.get<any>(baseUrl+'/pageUsers', { params });
  }

  getConsultant(id:any):Observable<Consultant>{
    return this.http.get<Consultant>(`${baseUrl}/${id}`)
  }
  getUser(id:any):Observable<User>{
    return this.http.get<User>(`${baseUrl}/${id}`)
  }
  newConsultant(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
  updateConsultant(id:any,data:any):Observable<any>{
    return this.http.patch(`${baseUrl}/${id}`,data);
  }
  updateUser(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getAllConsultantWithPagination(params:any):Observable<any>{
    return this.http.get<any>(baseUrl+'/pageConsultants', { params });
  }



}
