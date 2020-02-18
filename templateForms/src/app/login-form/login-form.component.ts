import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
obj:any[]=[
  {'loginName' : 'ashish' , 'mobile' : 9999999999 , 'email' : 'ashish@gmail.com', 'password' : 'ashish@123'},
  {'loginName' : 'abc' , 'mobile' : 8888888888 , 'email' : 'ashish@gmail.com', 'password' : 'ashish@123'}];
  error:any;
constructor(private router: Router, private userSer:UserServiceService) { }
  

ngOnInit() { 
  sessionStorage.setItem("userList",JSON.stringify(this.obj));
}
  onSubmit(f:NgForm) { 
    sessionStorage.setItem("loginName",f.value.name);
    sessionStorage.setItem("mobile", f.value.mob);
  console.log("User Input loginName : " + f.value.name + " , mobile : " + f.value.mob);
  
  this.obj.forEach(item => { 
    if ( (f.value.name == item.loginName) && (f.value.mob == item.mobile)){
      console.log("user inputs matched")
      this.router.navigate(['/home']) 
    }
    else {
    this.error="Please provide correct login details.";
      console.log("user input not matched")
    }
  });
 }
}

