import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Project} from "../models/project.model";
import {Consultant} from "../models/consultant.model";
const host="http://localhost:3000"
const baseUrl="http://localhost:3000/consultants"
@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http:HttpClient) { }
  public saveConsultant(consultant:Consultant):Observable<Consultant>{
    return this.http.post<Consultant>(host+"/consultants",consultant).pipe(map((res:any)=> {
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
  getConsultant(id:any):Observable<Consultant>{
    return this.http.get(`${baseUrl}/${id}`)
  }
  newConsultant(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
  updateConsultant(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  deleteConsultant(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
