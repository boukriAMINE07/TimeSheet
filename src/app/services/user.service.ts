import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/User.model";
import {Project} from "../models/project.model";

const API_URL = 'http://localhost:8080/api/test/';
const baseUrlUser="http://localhost:8080/users"

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(baseUrlUser+"/usersByRoleUser");
  }

  getUser(id:any):Observable<User>{
    return this.http.get<User>(`${baseUrlUser}/${id}`)
  }

}
