import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rester-user-comp',
  templateUrl: './rester-user-comp.component.html',
  styleUrls: ['./rester-user-comp.component.css']
})

export class ResterUserCompComponent implements OnInit {
  constructor( private usersr : UserServiceService) { }
  mobNumberPattern = "^[6-9]{1}[0-9]{9}$";
obj:any[];
login; 
mobile;
email;
password;
isSuccess:boolean;
ngOnInit() {
 }

submit(regForm:NgForm){

  this.login=regForm.value.login;
  this.mobile=regForm.value.mobile;
  this.email = regForm.value.email;
  this.password = regForm.value.password;

  this.obj = JSON.parse(sessionStorage.getItem('userList'));
  console.log(" list size : " + this.obj.length)
  this.obj.push({'loginName' : this.login , 'mobile' : this.mobile , 'email' : this.email ,
 'password' : this.password})
 sessionStorage.setItem("userList",JSON.stringify(this.obj));
 console.log(" list size after: " + this.obj.length)
 this.obj = JSON.parse(sessionStorage.getItem('userList'));
 this.obj.forEach(item => { 
  console.log("loginName : " + item.loginName + " mobile : " + item.mobile + " email : " + item.email + " password : " + item.password )
});
        this.isSuccess=true;
  }
}
