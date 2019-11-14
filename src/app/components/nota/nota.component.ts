import { Component } from "@angular/core";

@Component({
  selector: "app-nota",
  templateUrl: "./nota.component.html",
  styleUrls: ["./nota.component.css"]
})
export class NotaComponent {
  
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
}