import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NotaComponent } from '../nota/nota.component';

@Component({
  selector: 'app-blanca',
  templateUrl: './blanca.component.html',
  styleUrls: ['./blanca.component.css']
})
export class BlancaComponent implements OnInit {  
  @Input('data') user: any;
  @Output() eventoBorrar = new EventEmitter<number>();

  constructor(@Host() private _app: NotaComponent) { }

  ngOnInit() { }

  borrarUser(id:number){
    this.eventoBorrar.emit(id);
  }

  borrarUser2(id:number){
    this._app.usuarios = this._app.usuarios.filter(
      usuario => usuario.id != id
    );
  }
}

