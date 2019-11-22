import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBemol]'
})
export class BemolDirective {

  constructor(
    private _er: ElementRef,
    private _rdr: Renderer
  ) { }

  @Input() color:string;
  @Input() underline:boolean;

  ngOnInit(){
    this._er.nativeElement.style.color = this.color;
    this._er.nativeElement.style.fontWeight = this.underline;
  }
}
