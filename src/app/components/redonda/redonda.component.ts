import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redonda',
  templateUrl: './redonda.component.html',
  styleUrls: ['./redonda.component.css']
})
export class RedondaComponent implements OnInit {

  mensaje = "Un mensaje recibido";

  imgUrl = "http://lorempixel.com/400/200";

  status = false;

  tamanio = true;

  border = false;

  contador = 1;

  getMensaje(){
    return this.mensaje;
  }

  editar(event){
    console.log(event);
  }

  keyConArgumentos(event)
  {
    if (event.keyCode === 13) {
      console.log('evento con argumentos');
    }
  }

  keySinArgumentos(){
    console.log("evento sin argumentos");
  }

  alert(){
    alert('Presionado')
  }

  constructor() { }

  ngOnInit() {
  }

}
