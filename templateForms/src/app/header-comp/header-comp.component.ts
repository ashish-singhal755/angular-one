import { Component, OnInit, Injectable } from '@angular/core';
import { timer, Observable, interval } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { MapType } from '@angular/compiler';
import {takeWhile, tap} from 'rxjs/operators';

@Injectable()
@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {
  constructor(private router:Router) { }
  displayTimer : any ;
  time = new Observable(observer => {  
    setInterval(() => {       
    observer.next(new Date());  
    }, 1000);    });
    
  ngOnInit() {
    this.time.subscribe(x => {this.displayTimer= x})
  }

  logout(){
    sessionStorage.clear();
    this.time.subscribe().unsubscribe();
    this.router.navigate(['']) ;
  }

  dashboard()
  { 
    this.router.navigate(['/home/dashboard'])
  }

  gotoHome()
  {
    this.router.navigate(['/home'])
  }
}
