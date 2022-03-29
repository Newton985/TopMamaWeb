import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { MyaccountComponent } from '../myaccount/myaccount.component';
import { AuthGuardService } from '../auth/auth-guard.service';



const routes: Routes = [

  { path:"", component: UsersComponent, canActivate: [AuthGuardService] },
  { path: "dashboard/users", component: UsersComponent, canActivate: [AuthGuardService]  },
  { path: "dashboard/myaccount", component: MyaccountComponent, canActivate: [AuthGuardService] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class DashboardRoutingModule {
}