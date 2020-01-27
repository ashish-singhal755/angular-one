import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateForms';
  arr : any = [1,8,6,100,10,600];

  ngOnInit()
  {
    console.log(this.arr.sort((a,b) =>a - b));
  }
}

