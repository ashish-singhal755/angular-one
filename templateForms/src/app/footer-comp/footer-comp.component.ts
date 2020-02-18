import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-comp',
  templateUrl: './footer-comp.component.html',
  styleUrls: ['./footer-comp.component.css']
})
export class FooterCompComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  contactUs(){
    this.router.navigate(['/home/contactus'])
  }

  aboutus(){
    this.router.navigate(['/home/aboutus'])
  }
}
