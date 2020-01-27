import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loginName;
  mobile;
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("&&&&&&&&&&&" + this.route.snapshot.paramMap.get('name') + "::" +this.route.snapshot.paramMap.get('mob') );
    this.loginName=this.route.snapshot.paramMap.get('name');
  this.mobile=this.route.snapshot.paramMap.get('mob');
  
  console.log("login : " + this.loginName)
  console.log("mobile : " + this.mobile)
  }

  

  }
