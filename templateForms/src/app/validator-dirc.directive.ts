import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidatorDirc]'
})
export class ValidatorDircDirective {

  constructor(private el:ElementRef) { }
//events should be input , keyup, keypress
  @HostListener ('input') validate(){
    const str = this.el.nativeElement.value;
    this.el.nativeElement.value = str.replace(/[^0-9]*/g,'');
  }

}
