import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    phone:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { username, email, password,phone } = this.form;
    this.authService.register(username, email, password,phone).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        setTimeout(() =>{
          this.router.navigate(['/consultant/listeConsultant']);
        }, 200);  //0.2s)
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
