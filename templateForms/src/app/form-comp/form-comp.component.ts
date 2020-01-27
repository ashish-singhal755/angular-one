import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {
user:any=[1,2,3,4,5,6];
message:any={};

  constructor() { }

  ngOnInit() {
  }
  onSubmit(ft:NgForm) { 
console.log("Form Field values with DB:: " + ft.value.name + " , " + ft.value.mob)
  }

  onSubmitt(f:NgForm) { 
    console.log("Form Field values without DB:: " + f.value.name1 + " , " + f.value.mob1)
      }
}
