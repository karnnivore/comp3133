import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private eleRef: ElementRef) { 
  }

  @HostListener('blur') onBlur() {
    if (this.eleRef.nativeElement.value) {
      this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toUpperCase();
    }
  }
}
