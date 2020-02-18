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
user:any;
login; 
mobile;
email;
password;
isSuccess:boolean;
errorMsg:any="";
ngOnInit() {
  this.user=JSON.parse(sessionStorage.getItem('user'));
  console.log("loginname : " + this.user.loginName)
  this.login=this.user.loginName;
  this.mobile=this.user.mobile;
  this.email = this.user.email;
  this.password = this.user.password;
 }

submit(regForm:NgForm){
  this.errorMsg=""
  this.login=regForm.value.login;
  this.mobile=regForm.value.mobile;
  this.email = regForm.value.email;
  this.password = regForm.value.password;
  this.obj = JSON.parse(sessionStorage.getItem('userList'));
  console.log(" list size : " + this.obj.length)

  this.obj.forEach(item => { 
    if ( (this.user.loginName == item.loginName) && (this.user.mobile == item.mobile ) && (this.user.email == item.email) && (this.user.password == item.password) )
    {
      this.obj.splice(this.obj.indexOf(item),1);
    }
  });

  this.obj.forEach(item => { 
    if ( (this.login == item.loginName) && (this.mobile == item.mobile ) && (this.email == item.email) )
    {
      this.errorMsg="Same details are already registered with other User."
    }    
  });
  if(this.errorMsg==""){
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
}
