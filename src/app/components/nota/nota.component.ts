import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-nota",
  templateUrl: "./nota.component.html",
  styleUrls: ["./nota.component.css"]
})
export class NotaComponent implements OnInit {
  
  // Property Binding
  imageURL = "http://lorempixel.com/400/200";
  botonStatus = false;
  
  // Class y Style Binding
  isActive = true;

  // Event Binding
  guardar(event){
    console.log(event);
  }

  contador = 1;

  // *ngFor
  numeros = [1,2,3,4,5,6];

  colocar(){
    this.numeros.push(Math.random());
  }

  // Event Filtering
  onKeyUp(event){
    if (event.keyCode === 13) {
      console.log("con argumentos");
    }
  }
  
  onKeyUpSinEvent(){
    console.log("sin argumentos");    
  }

  //Template Variable
  requestInput(event){
    console.log(event.target.value);
  }

  requestValue(nombre){
    console.log(nombre);
  }

  // Two way binding
  persona = {
    nombre: 'alex',
    edad:35
  }; 

  //If en  Contenedores y Templates
  nivel = 0;

  isLogged = true;

  // Templates
  isClosed = true;

  // Select
  frutas:any = [
    {
      id: 1,
      nombre: 'manzana'
    },
    {
      id: 2,
      nombre: 'naranja'
    },
    {
      id: 3,
      nombre: 'platano'
    }
  ];
  seleccionFruta = null;

  verduras:any = [
    {
      id: 1,
      nombre: 'tomate'
    },
    {
      id: 2,
      nombre: 'zanahoria'
    },
    {
      id: 3,
      nombre: 'locoto'
    }
  ];
  seleccionVerdura = null;

  colores:any = [
    {
      id: 1,
      nombre: 'rojo'
    },
    {
      id: 2,
      nombre: 'naranja'
    },
    {
      id: 3,
      nombre: 'amarillo'
    }
  ];
  seleccionColor = null;

  change(target){
    console.log(target);
    this.seleccionColor = target.options[target.options.selectedIndex].text;
  }

  // Input y Output
  usuarios = [];

  /* Aqui estuvo un constructor que instanciaba 
    _http de tipo HttpClient pero debe estar en 
    otro sitio añadiendo otras variables */

  ngOnInit(){
    this._http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((datos:any[]) => {
        this.usuarios = datos
      })
  }

  borrarUsuario(id:number){
    this.usuarios = this.usuarios.filter(
      usuario => usuario.id != id
      );
  }

  // Reactivee Formes
  signupForm: FormGroup;

  constructor(    
    private _http: HttpClient,
    private _builder: FormBuilder
  ) {
    this.signupForm = this._builder.group({
      nombre: [''],
      usuario: ['', Validators.required],
      email: ['', Validators.compose(
          [Validators.email, Validators.required]
        )],
      clave: ['', Validators.required]
    });
  }

  registrar(values){
    console.log(values);
    
  }
}
