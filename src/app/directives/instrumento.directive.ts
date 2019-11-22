import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appInstrumento]'
})
export class InstrumentoDirective {

  constructor(
    public _elementRef: ElementRef,
    public _renderer: Renderer
  ) { }

  @HostListener('mouseenter') onMouseEnter () {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.hover(false);
  }

  hover(color:boolean): void{
    if (color) {
      this._renderer.setElementStyle(
        this._elementRef.nativeElement, 'color', 'red'
      );
    } else {
      this._renderer.setElementStyle(
        this._elementRef.nativeElement, 'color', 'blue'
      );
    }
  }
}

