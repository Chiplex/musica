import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appAcorde]',
})
export class AcordeDirective {
  constructor(
    public _elementRef: ElementRef,
    public _renderer: Renderer
  ) { }

  @Input() appAcorde: boolean

  ngOnInit() {
    if (this.appAcorde) {
      this._renderer.setElementStyle(
        this._elementRef.nativeElement, 'color', 'red'
      );
    }
  }
}

