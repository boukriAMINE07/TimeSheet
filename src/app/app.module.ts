import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NewProjectComponent } from './components/projects/new-project/new-project.component';
import { SignInComponent } from './components/Consultantt/sign-in/sign-in.component';
import { SignUpComponent } from './components/Consultantt/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/Consultantt/forget-password/forget-password.component';
import { ErrorComponent } from './components/error/error.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SingleProjectComponent } from './components/projects/single-project/single-project.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import {SignInAdminComponent} from "./components/Admin/authAdmin/sign-in-admin/sign-in-admin.component";
import {
  ForgetPasswordAdminComponent
} from "./components/Admin/authAdmin/forget-password-admin/forget-password-admin.component";
import { ListeConsultantComponent } from './components/Consultantt/liste-consultant/liste-consultant.component';
import { SingleConsultantComponent } from './components/Consultantt/single-consultant/single-consultant.component';
import { EditConsultantComponent } from './components/Consultantt/edit-consultant/edit-consultant.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NavbarVerticalComponent,
    NewProjectComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    SignInAdminComponent,
    ForgetPasswordAdminComponent,
    ErrorComponent,
    SingleProjectComponent,
    EditProjectComponent,
    ListeConsultantComponent,
    SingleConsultantComponent,
    EditConsultantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
