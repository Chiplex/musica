import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClavesService } from '@services/claves.service';

@Component({
  selector: 'app-show-clave',
  templateUrl: './show-clave.component.html',
  styleUrls: ['./show-clave.component.css']
})
export class ShowClaveComponent implements OnInit {

  constructor(
    private _ar: ActivatedRoute,
    private _cs: ClavesService
  ) { }

  clave = null;

  id:any;
  ngOnInit() {
    this._ar.paramMap.subscribe(params => this.id = params.get('id'));
    this.clave = this._cs.getClaveId(this.id);
  }

}
