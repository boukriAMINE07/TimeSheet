import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewProjectComponent} from "./components/projects/new-project/new-project.component";
import {SignInComponent} from "./components/consultant/sign-in/sign-in.component";

import {SignUpComponent} from "./components/consultant/sign-up/sign-up.component";
import {ForgetPasswordComponent} from "./components/consultant/forget-password/forget-password.component";
import {ErrorComponent} from "./components/error/error.component";
import {SingleProjectComponent} from "./components/projects/single-project/single-project.component";
import {EditProjectComponent} from "./components/projects/edit-project/edit-project.component";
import {SignInAdminComponent} from "./components/Admin/authAdmin/sign-in-admin/sign-in-admin.component";
import {
  ForgetPasswordAdminComponent
} from "./components/Admin/authAdmin/forget-password-admin/forget-password-admin.component";
import {ListeConsultantComponent} from "./components/consultant/liste-consultant/liste-consultant.component";
import {SingleConsultantComponent} from "./components/consultant/single-consultant/single-consultant.component";
import {EditConsultantComponent} from "./components/consultant/edit-consultant/edit-consultant.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"project/newProject",component:NewProjectComponent},
  {path:"project/editProject/:id",component:EditProjectComponent},
  {path:"project/single-project/:id",component:SingleProjectComponent},
  {path:"consultant/signIn",component:SignInComponent},
  {path:"consultant/signUp",component:SignUpComponent},
  {path:"consultant/forgetPassword",component:ForgetPasswordComponent},
  {path:"admin/signIn",component:SignInAdminComponent},
  {path:"admin/forgetPassword",component:ForgetPasswordAdminComponent},
  {path:"error",component:ErrorComponent},
  {path:"consultant/listeConsultant",component:ListeConsultantComponent},
  {path:"consultant/singleConsultant/:id",component:SingleConsultantComponent},
  {path:"consultant/editConsultant/:id",component:EditConsultantComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
