import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  

  

  requestInput(event){
    console.log(event.target.value); 
  }

  requestValue(valor){
    console.log(valor);
    
  }

  persona:any = {
    nombre: 'erick',
    edad: '25'
  };

  nivel = 0;

  isNotLogged = true;

  isClosed = true;

  numeros = [1,2,3,4,5,6];

  colocar(){
    this.numeros.push(Math.random());
  }

  users:any = [];

  agregar(){
    if (this.username != null) {
      this.users.push(this.username);
      this.username = null;
    }
  }

  agregar2(persona){
    if (persona != null) {
      this.users.push(persona);
      persona = null;
    }
  }

  username = null;

  // Input Output

  usuarios:any = [];
  constructor(
    private _http:HttpClient
  ) { }

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data)=> {
        this.usuarios = data;
      });
  }

  borrar(id:any){
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
  }

  fruta = null;

  frutas = [
    {
      id:1,
      nombre: 'Manzana'
    },
    {
      id:2,
      nombre: 'Platano'
    },
    {
      id:3,
      nombre: 'Naranja'
    }
  ];

  cambiarTitulo(target){
    console.log(target);
    
    this.fruta = target.options[target.options.selectedIndex].text;
  }
}
