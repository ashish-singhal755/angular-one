import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  pure:false
})
export class MyPipePipe implements PipeTransform {

  transform(array): any {
    return array.filter(val => val % 2 === 0 );
  }

}
