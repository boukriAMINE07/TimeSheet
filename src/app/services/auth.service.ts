import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  roles: string[] = [];
  private authStorageKey = 'auth-user';
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

    register(username: string, email: string, password: string, phone: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        phone,
      },
      httpOptions
    );
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(this.authStorageKey);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  isAdmin():boolean {
    let type:boolean=false;

    this.roles = this.getUser().roles;
    this.roles.forEach(role=>{
      console.log(role)
      if (role=='ROLE_ADMIN') return type=true
      else return type=false


    })
    return  type;
  }

}
