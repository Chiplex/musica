import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, Host } from '@angular/core';
import { RedondaComponent } from '../redonda/redonda.component';

@Component({
  selector: 'app-silencio',
  templateUrl: './silencio.component.html',
  styleUrls: ['./silencio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SilencioComponent implements OnInit {

  @Input('VieneDeRedonda') usuario:any;

  @Output() eventoEliminar = new EventEmitter<number>();

  constructor(
    @Host() private _appRedonda: RedondaComponent
  ) { }

  ngOnInit() {
  }

  eliminar(id:any){
    this.eventoEliminar.emit(id);
  }

  eliminar2(id:any){
    this._appRedonda.usuarios = this._appRedonda.usuarios.filter(usuario => usuario.id != id) ;
  }

}
