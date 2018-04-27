import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomImage]'
})
export class ZoomImageDirective {
  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.addStyle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.clearStyle();
  }

  private addStyle() {
    this.el.nativeElement.style['transform'] = 'scale(1.3)';
    this.el.nativeElement.style['border'] = '1px solid red';
    this.el.nativeElement.style['z-index'] = 12000;

  }

  private clearStyle() {
    this.el.nativeElement.style['transition'] = 'transition: transform 1s;';
    this.el.nativeElement.style['transform'] = 'scale(1)';
    this.el.nativeElement.style['border'] = 'none';
    this.el.nativeElement.style['z-index'] = 100;
  }
}