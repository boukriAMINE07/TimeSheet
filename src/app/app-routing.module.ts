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
import {SignUpComponent} from "./components/Admin/authAdmin/sign-up/sign-up.component";
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


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"project/newProject",component:NewProjectComponent},
  {path:"project/editProject/:id",component:EditProjectComponent},
  {path:"project/single-project/:id",component:SingleProjectComponent},
  {path:"consultant/signIn",component:SignInComponent},
  {path:"admin/createConsultant",component:SignUpComponent},
  {path:"consultant/forgetPassword",component:ForgetPasswordComponent},
  {path:"admin/signIn",component:SignInAdminComponent},
  {path:"admin/forgetPassword",component:ForgetPasswordAdminComponent},
  {path:"error",component:ErrorComponent},
  {path:"profilconsultant",component:ProfilconsultantComponent},
  {path:"formtache",component:FormtacheComponent},
  {path:"hometaches",component:HometachesComponent},
  {path:"single-tache/:id",component:SingleTacheComponent},
  {path:"edit-tache/:id",component:EditTacheComponent},
  {path:"consultant/listeConsultant",component:ListeConsultantComponent},
  {path:"consultant/singleConsultant/:id",component:SingleConsultantComponent},
  {path:"consultant/editConsultant/:id",component:EditConsultantComponent},
  {path:"consultant/newConsultant",component:NewConsultantComponent},
  {path:"not-found",component: ErrorComponent},
  {path:"**",redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
