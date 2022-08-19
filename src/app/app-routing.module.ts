import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewProjectComponent} from "./components/projects/new-project/new-project.component";
import{FormtacheComponent} from "./components/taches/formtache/formtache.component";
import {HometachesComponent} from "./components/taches/hometaches/hometaches.component";
import {SingleTacheComponent} from "./components/taches/single-tache/single-tache.component";
import {EditTacheComponent} from "./components/taches/edit-tache/edit-tache.component";
import {ProfilconsultantComponent} from "./components/profilconsultant/profilconsultant.component";
import {SignInComponent} from "./components/Consultant/sign-in/sign-in.component";
import {ForgetPasswordComponent} from "./components/Consultant/forget-password/forget-password.component";
import {ErrorComponent} from "./components/error/error.component";
import {SingleProjectComponent} from "./components/projects/single-project/single-project.component";
import {EditProjectComponent} from "./components/projects/edit-project/edit-project.component";
import {SignInAdminComponent} from "./components/Admin/authAdmin/sign-in-admin/sign-in-admin.component";
import {ForgetPasswordAdminComponent} from "./components/Admin/authAdmin/forget-password-admin/forget-password-admin.component";
import {ListeConsultantComponent} from "./components/Consultant/liste-consultant/liste-consultant.component";
import {SingleConsultantComponent} from "./components/Consultant/single-consultant/single-consultant.component";
import {EditConsultantComponent} from "./components/Consultant/edit-consultant/edit-consultant.component";
import {NewConsultantComponent} from "./components/Consultant/new-consultant/new-consultant.component";
import {
  NewTaskOfConsultantComponent
} from "./components/TaskOfConsultant/new-task-of-consultant/new-task-of-consultant.component";
import {
  HomeTaskOfConsultantComponent
} from "./components/TaskOfConsultant/home-task-of-consultant/home-task-of-consultant.component";
import {
  SingleTaskOfConsultantComponent
} from "./components/TaskOfConsultant/single-task-of-consultant/single-task-of-consultant.component";
import {RegisterComponent} from "./components/Admin/authAdmin/register/register.component";
import {AuthAdminGuard} from "./guards/auth-admin.guard";
import {AuthUserGuard} from "./guards/auth-user.guard";
import {NewTaskComponent} from "./components/profile/new-task/new-task.component";


const routes: Routes = [
  {path:'',redirectTo:'/admin/signIn',pathMatch:'full'},
  {path:'admin/signIn',component:SignInAdminComponent},


  {path:"admin/createConsultant",component:RegisterComponent},
  {path:"consultant/forgetPassword",component:ForgetPasswordComponent},
  {path:"admin/forgetPassword",component:ForgetPasswordAdminComponent},



  {path:"error",component:ErrorComponent},
  {
    path: 'user',
    canActivate: [AuthUserGuard],
    children: [
      {path:'',redirectTo:'profile',pathMatch:'full'},
      {path:'profile', component: ProfilconsultantComponent},
      {path:"newTaskOfConsultant",component:NewTaskComponent},

    ]
  },
  {
    path: 'project',
    canActivate: [AuthAdminGuard],
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home', component: HomeComponent},
      {path:"newProject",component:NewProjectComponent},
      {path:"editProject/:id",component:EditProjectComponent},
      {path:"single-project/:id",component:SingleProjectComponent},
    ]
  },
  {
    path: 'task',
    canActivate: [AuthAdminGuard],
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:"newTask",component:FormtacheComponent},
      {path:"home",component:HometachesComponent},
      {path:"single-task/:id",component:SingleTacheComponent},
      {path:"edit-task/:id",component:EditTacheComponent},
    ]
  },
  {
    path: 'consultant',
    canActivate: [AuthAdminGuard],
    children: [
      {path:'',redirectTo:'listeConsultant',pathMatch:'full'},
      {path:"listeConsultant",component:ListeConsultantComponent},
      {path:"singleConsultant/:id",component:SingleConsultantComponent},
      {path:"editConsultant/:id",component:EditConsultantComponent},
      {path:"newConsultant",component:NewConsultantComponent},
      {path:"newTaskOfConsultant",component:NewTaskOfConsultantComponent},
      {path:"TaskOfConsultant",component:HomeTaskOfConsultantComponent},
      {path:"single-taskOfConsultant/:id",component:SingleTaskOfConsultantComponent},
    ]
  },


  {path:"not-found",component: ErrorComponent},
  //{path:"**",redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
