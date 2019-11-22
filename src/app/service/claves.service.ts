import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClavesService {

  constructor() { }

  claves:any = [
    {
      id:1,
      nombre: 'Sol'
    },
    {
      id:2,
      nombre: 'Do'
    },
    {
      id:3,
      nombre: 'Fa'
    },
  ];

  getClaves(){
    return this.claves;
  }

  getClaveId(id:string){
    return (this.claves.filter( clave => clave.id == id));
  }
}
