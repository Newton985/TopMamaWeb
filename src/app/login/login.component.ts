import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_BASE_URL } from '../helpers/api.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private http: HttpClient, private router: Router){

  }

  title = 'Home';
  loginForm : FormGroup = new FormGroup({});
  alertDialogStatus : string = 'hidden';
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  alertType = '';
  alertMessage = '';


  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  

  login(loginForm: FormGroup){

    this.alertDialogStatus = 'vs';
    this.alertType = 'progress';
    this.alertMessage = 'Log In....'


    const body = new HttpParams()
    .set('username', loginForm.value.username)
    .set('password', loginForm.value.password);

    const headers = new HttpHeaders()
    .set('Accept','application/x-www-form-urlencoded')
    .set('Content-Type', 'application/x-www-form-urlencoded')


    const loginResponse : Observable<any> = this.http.post(API_BASE_URL+'login',
    body.toString(),
    {
      headers: headers,
      observe: 'response'
    }).pipe(catchError((err)=>{
      this.alertType = 'error'
      this.alertMessage = 'Incorrect username or password'

      setTimeout(()=>{
        this.alertDialogStatus = 'hidden'
       }, 3000);

      return throwError(err);
    }));

    

  loginResponse.subscribe(response => {

    console.log(response);

        this.alertType = 'success';
        this.alertMessage = 'Log in success'

        localStorage.setItem('accessToken', response.body.token);
        localStorage.setItem("signedUser", loginForm.value.username)

        const loggedAt = + new Date(); const loggedAtStr = loggedAt.toString();
        localStorage.setItem("loggedInAt", loggedAtStr)

        console.log(response.body)


      setTimeout(()=>{
             this.alertDialogStatus = 'hidden'
             this.router.navigate(['/dashboard'])
      }, 400);
  });

  }


  isAlphaNumeric(str : string) {
    var code, i, len;
 
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return true;
      }
    }
    return false;
  };
 
 
  hasSpecialCharacter(str: string){
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(str);
  }


}
