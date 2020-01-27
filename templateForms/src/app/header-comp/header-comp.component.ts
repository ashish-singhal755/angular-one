import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {

  constructor(private router:Router) { }
  displayTimer;
  source = timer(1000, 1000);
  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = new Date().getDate();
  hours = new Date().getHours();
  minuts = new Date().getMinutes();
  subscribe = this.source.subscribe(
    val => this.displayTimer = (moment(new Date( this.year , this.month , this.day , this.hours, 
      this.minuts, val ))
    .format('YYYY-MM-DD HH:mm:ss'))
    );
  ngOnInit() {
  
  }

  logout(){
    sessionStorage.clear();
    this.subscribe.unsubscribe();
    this.router.navigate(['']) ;
  }

  dashboard()
  { 
    console.log("************12zzzzzzzzz8");
    this.router.navigate(['/home/a/b/dashboard'])
  }
}
