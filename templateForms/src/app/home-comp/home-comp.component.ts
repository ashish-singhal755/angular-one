import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {
  displayTimer;
  constructor() { }
  source = timer(1000, 1000);
  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = new Date().getDate();
  hours = new Date().getHours();
  minuts = new Date().getMinutes();
  subscribe = this.source.subscribe(
    val => this.displayTimer = (moment(new Date( this.year , this.month , this.day , this.hours, this.minuts, val ))
    .format('YYYY-MM-DD hh:mm:ss'))
    );
  ngOnInit() {
  
  }

  logout(){
    this.subscribe.unsubscribe();
  }
}
