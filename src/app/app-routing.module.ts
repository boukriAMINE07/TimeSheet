import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewProjectComponent} from "./components/projects/new-project/new-project.component";
import {SignInComponent} from "./components/authConsultant/sign-in/sign-in.component";
import {SignInAdminComponent} from "./components/authAdmin/sign-in-admin/sign-in-admin.component";
import {SignUpComponent} from "./components/authConsultant/sign-up/sign-up.component";
import {ForgetPasswordComponent} from "./components/authConsultant/forget-password/forget-password.component";
import {ForgetPasswordAdminComponent} from "./components/authAdmin/forget-password-admin/forget-password-admin.component";
import {ErrorComponent} from "./components/error/error.component";
import {SingleProjectComponent} from "./components/projects/single-project/single-project.component";
import {EditProjectComponent} from "./components/projects/edit-project/edit-project.component";

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
  {path:"error",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
