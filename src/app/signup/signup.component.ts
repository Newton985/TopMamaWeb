import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE_URL } from '../helpers/api.helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router){

  }

  title = 'Sign UP';
  signUpForm : FormGroup = new FormGroup({});
  alertDialogStatus : string = 'hidden';
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  alertType = '';
  alertMessage = '';


  ngOnInit(){
    this.signUpForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  

  signup(signUpForm: FormGroup){

    this.alertDialogStatus = 'vs';
    this.alertType = 'progress';
    this.alertMessage = 'Sign Up....'


    const body = {
      "email": signUpForm.value.username,
      "password": signUpForm.value.password
    }

    console.log(body)

    const loginResponse : Observable<any> = this.http.post(API_BASE_URL+'register',
    body,
    {
      observe: 'response'
    }).pipe(catchError((err)=>{
      this.alertType = 'error'
      this.alertMessage = 'Username already exists'

      setTimeout(()=>{
        this.alertDialogStatus = 'hidden'
       }, 3000);

      return throwError(err);
    }));

    

  loginResponse.subscribe(response => {

    console.log(response);

        this.alertType = 'success';
        this.alertMessage = 'Sign Up'

        const loggedAt = + new Date(); const loggedAtStr = loggedAt.toString();

        localStorage.setItem('accessToken', response.body.token);
        localStorage.setItem("signedUser", signUpForm.value.username)
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
