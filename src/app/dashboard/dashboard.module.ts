import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { DashboardComponent } from './dashboard.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AppRoutingModule } from '../app-routing.module';
import { AppMaterialModule } from '../app.material-module';
import { AuthService } from '../auth/auth.service';
import { AuthenticatedService } from '../auth/authenticated.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { UsersComponent } from '../users/users.component';
import { MyaccountComponent } from '../myaccount/myaccount.component';



@NgModule({
  declarations: [
    
    UsersComponent,
    MyaccountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
 

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true  }
    AuthenticatedService,AuthGuardService,AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [DashboardComponent,]
})
export class DashboardModule { }
