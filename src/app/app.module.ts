import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NewProjectComponent } from './components/projects/new-project/new-project.component';
import { SignInAdminComponent } from './components/Admin/authAdmin/sign-in-admin/sign-in-admin.component';
import { ForgetPasswordAdminComponent } from './components/Admin/authAdmin/forget-password-admin/forget-password-admin.component';
import { SignInComponent } from './components/Consultant/sign-in/sign-in.component';
import { ForgetPasswordComponent } from './components/Consultant/forget-password/forget-password.component';
import { ErrorComponent } from './components/error/error.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SingleProjectComponent } from './components/projects/single-project/single-project.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import {FormtacheComponent} from "./components/taches/formtache/formtache.component";
import { HometachesComponent } from './components/taches/hometaches/hometaches.component';
import { SingleTacheComponent } from './components/taches/single-tache/single-tache.component';
import { EditTacheComponent } from './components/taches/edit-tache/edit-tache.component';
import { ProfilconsultantComponent } from './components/profilconsultant/profilconsultant.component';
import { ListeConsultantComponent } from './components/Consultant/liste-consultant/liste-consultant.component';
import { SingleConsultantComponent } from './components/Consultant/single-consultant/single-consultant.component';
import { EditConsultantComponent } from './components/Consultant/edit-consultant/edit-consultant.component';
import { NewConsultantComponent } from './components/Consultant/new-consultant/new-consultant.component';
import { AllProjectTaskConsultantComponent } from './components/all-project-task-consultant/all-project-task-consultant.component';
import {
  HomeTaskOfConsultantComponent
} from "./components/TaskOfConsultant/home-task-of-consultant/home-task-of-consultant.component";
import { NewTaskOfConsultantComponent } from './components/TaskOfConsultant/new-task-of-consultant/new-task-of-consultant.component';
import {NgxPaginationModule} from "ngx-pagination";
import { SingleTaskOfConsultantComponent } from './components/TaskOfConsultant/single-task-of-consultant/single-task-of-consultant.component';
import {httpInterceptorProviders} from "./helpers/http.interceptor";
import { RegisterComponent } from './components/Admin/authAdmin/register/register.component';
import { NavbarProfileComponent } from './components/profile/navbar-profile/navbar-profile.component';
import { NewTaskComponent } from './components/profile/new-task/new-task.component';
import { DetailsComponent } from './components/profile/details/details.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NavbarVerticalComponent,
    NewProjectComponent,
    SignInComponent,
    ForgetPasswordComponent,
    SignInAdminComponent,
    ForgetPasswordAdminComponent,
    ErrorComponent,
    SingleProjectComponent,
    EditProjectComponent,
    FormtacheComponent,
    HometachesComponent,
    SingleTacheComponent,
    EditTacheComponent,
    ProfilconsultantComponent,
    ListeConsultantComponent,
    SingleConsultantComponent,
    EditConsultantComponent,
    NewConsultantComponent,
    AllProjectTaskConsultantComponent,
    HomeTaskOfConsultantComponent,
    NewTaskOfConsultantComponent,
    SingleTaskOfConsultantComponent,
    RegisterComponent,

    NavbarProfileComponent,
      NewTaskComponent,
      DetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
