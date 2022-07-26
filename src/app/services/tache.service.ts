import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Tache} from "../models/tache.model";
const baseUrl="http://localhost:3000/taches"

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }
  getTaches(){
    return this.http.get<any>(baseUrl).
    pipe(map((tache:any)=>{
      return tache;
    }))
  }

  getAllTache():Observable<Tache[]>{
    return this.http.get<Tache[]>(baseUrl);
  }

  getTache(id:any):Observable<Tache>{
    return this.http.get(`${baseUrl}/${id}`)
  }

  newTache(data:any):Observable<any> {
    return this.http.post(baseUrl,data);
  }

  updateTache(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  deleteTache(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
