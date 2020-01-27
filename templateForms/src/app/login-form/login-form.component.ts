import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
user:any=[1,2,3,4,5];
constructor(private router: Router) { }
 
ngOnInit() { }


  onSubmit(f:NgForm) { 
  console.log("&&&&&&&&&&& : " + f.value.name + " : " + f.value.mob);
  sessionStorage.setItem("loginName" ,f.value.name );
  sessionStorage.setItem("mobile" ,f.value.mob );
  this.router.navigate(['/home' , f.value.name, f.value.mob])  
 }
}

