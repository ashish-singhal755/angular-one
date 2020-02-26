import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {


  
  transform(array): any {
   // return array.filter(val => val % 2 === 0 );
   return array.filter(val => val.status == 1 );
  }

}
