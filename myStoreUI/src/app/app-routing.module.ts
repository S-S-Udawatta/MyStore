import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {WelcomContentComponent} from "./components/welcom-content/welcom-content.component";
import {AuthGuard} from "./gaurds/auth.guard";
import {AdminComponent} from "./components/login/admin/admin.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {path:'',component:WelcomContentComponent},
  {path:'customer',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/login',component:AdminComponent},
  {path:'customer/login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'customer/dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'admin/dashboard',component:AdminDashboardComponent,canActivate:[AuthGuard]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
