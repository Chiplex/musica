import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appParlante]'
})
export class ParlanteDirective {

  constructor(    
    public _elementRef: ElementRef,
    public _renderer: Renderer
  ) { }

  @Input() textura: string;
  @Input() underline: boolean;

  ngOnInit() {
    this._elementRef
      .nativeElement.style.color = this.textura
    this._elementRef
    .nativeElement.style.textDecoration = this.underline
  }
}
