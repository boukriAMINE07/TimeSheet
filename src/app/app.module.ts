import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NewProjectComponent } from './components/projects/new-project/new-project.component';
import { SignInComponent } from './components/authConsultant/sign-in/sign-in.component';
import { SignUpComponent } from './components/authConsultant/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/authConsultant/forget-password/forget-password.component';
import { SignInAdminComponent } from './components/Admin/authAdmin/sign-in-admin/sign-in-admin.component';
import { ForgetPasswordAdminComponent } from './components/Admin/authAdmin/forget-password-admin/forget-password-admin.component';
import { ErrorComponent } from './components/error/error.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SingleProjectComponent } from './components/projects/single-project/single-project.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import {FormtacheComponent} from "./components/taches/formtache/formtache.component";
import { HometachesComponent } from './components/taches/hometaches/hometaches.component';
import { SingleTacheComponent } from './components/taches/single-tache/single-tache.component';
import { EditTacheComponent } from './components/taches/edit-tache/edit-tache.component';
import { ProfilconsultantComponent } from './components/profilconsultant/profilconsultant.component';




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
    FormtacheComponent,
    HometachesComponent,
    SingleTacheComponent,
    EditTacheComponent,
    ProfilconsultantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
