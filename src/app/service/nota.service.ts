import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  notas:any = [
    {
      id: 1,
      nombre: 'Do'
    },
    {
      id: 2,
      nombre: 'Re'
    },
    {
      id: 3,
      nombre: 'Mi'
    },
    {
      id: 4,
      nombre: 'Fa'
    },
    {
      id: 5,
      nombre: 'Sol'
    },
    {
      id: 6,
      nombre: 'La'
    },
    {
      id: 7,
      nombre: 'Si'
    },
  ]

  constructor() { }

  getNotas(){
    return this.notas;
  }

  getNotaId(id:string){
    return this.notas.filter( nota => nota.id == id);
  }
}
