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
}
