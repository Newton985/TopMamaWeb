import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { faCheckDouble, faCheckSquare, faFileExcel, faFilePdf, faTable,
  faCheckCircle, faTimesCircle, faUsers, faUserLock } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import jspdf from "jspdf";
import autoTable from 'jspdf-autotable';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit{

  title = 'Dashboard';
  isLoading = false;



  faCheckSquare = faCheckSquare;
  faCheckDouble = faCheckDouble;


  alertDialogStatus : string = 'hidden';
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  alertType = '';
  alertMessage = '';
  loggedUser  = localStorage.getItem("signedUser")



  headLine = "Users";
  activeTab = 'm-c'

  constructor(private router: Router, private http : HttpClient){}

  ngOnInit(): void {


  }


  ngAfterViewInit() {
   this.router.navigate(["users"])
  }



  goToUsers(){}

  goToMyAccount(){}



}
