import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {StorageService} from "../../../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-admin',
  templateUrl: './sign-in-admin.component.html',
  styleUrls: ['./sign-in-admin.component.css']
})
export class SignInAdminComponent implements OnInit {
  form: any = {
    username: null,
    password: null,

  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      setTimeout(() => {
        this.roles = this.storageService.getUser().roles;
        this.roles.forEach(role=>{
          console.log(role)
          if (role==='ROLE_ADMIN') {
            this.router.navigate(['project/home']);
          } else{
            this.router.navigate(['consultant/profile']);
          }

        })

      }, 1000);  //1s

    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {

        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
