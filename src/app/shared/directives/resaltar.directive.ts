import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el : ElementRef) {
    console.log(el)
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('onMouseEnter')
    this.resaltar('bold')
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('onMouseLeave')
    this.resaltar('')
  }

  private resaltar(color:string):void {
    this.el.nativeElement.style.fontWeight = color
  }
}