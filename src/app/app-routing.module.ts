import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service'
import {AuthenticatedService} from './auth/authenticated.service'
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'signup', component:SignupComponent, canActivate: [AuthenticatedService]},
  {path: "login", component: LoginComponent, canActivate: [AuthenticatedService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
}
