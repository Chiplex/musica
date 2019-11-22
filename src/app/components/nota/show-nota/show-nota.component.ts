import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NotaService } from '@services/nota.service';
import { switchMap } from "rxjs/internal/operators/switchMap";

@Component({
  selector: 'app-show-nota',
  templateUrl: './show-nota.component.html',
  styleUrls: ['./show-nota.component.css']
})
export class ShowNotaComponent implements OnInit {

  constructor( 
    private _activatedRoute: ActivatedRoute,
    private _notaService: NotaService
  ) { }

  nota = null;

  ngOnInit() {
    this._activatedRoute
      .paramMap
      .pipe(
        switchMap(
          (params:ParamMap) => 
            this._notaService.getNotaId(params.get('id'))
          ))
      .subscribe((nota) => {
        console.log(nota);
        
        this.nota = nota
      });
  }
}

