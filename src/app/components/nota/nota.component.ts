import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LowercasePipe } from "@pipes/lowercase.pipe";

@Component({
  selector: "app-nota",
  templateUrl: "./nota.component.html",
  styleUrls: ["./nota.component.css"],
  providers: [LowercasePipe]
})
export class NotaComponent implements OnInit {
  // Property Binding
  imageURL = "http://lorempixel.com/400/200";
  botonStatus = false;

  // Class y Style Binding
  isActive = true;

  // Event Binding
  guardar(event: any) {
    console.log(event);
  }

  contador = 1;

  // *ngFor
  numeros = [1, 2, 3, 4, 5, 6];

  colocar() {
    this.numeros.push(Math.random());
  }

  // Event Filtering
  onKeyUp(event: { keyCode: number; }) {
    if (event.keyCode === 13) {
      console.log("con argumentos");
    }
  }

  onKeyUpSinEvent() {
    console.log("sin argumentos");
  }

  //Template Variable
  requestInput(event: { target: { value: any; }; }) {
    console.log(event.target.value);
  }

  requestValue(nombre: any) {
    console.log(nombre);
  }

  // Two way binding
  persona = {
    nombre: "alex",
    edad: 35
  };

  //If en  Contenedores y Templates
  nivel = 0;

  isLogged = true;

  // Templates
  isClosed = true;

  // Select
  frutas: any = [
    {
      id: 1,
      nombre: "manzana"
    },
    {
      id: 2,
      nombre: "naranja"
    },
    {
      id: 3,
      nombre: "platano"
    }
  ];
  seleccionFruta = null;

  verduras: any = [
    {
      id: 1,
      nombre: "tomate"
    },
    {
      id: 2,
      nombre: "zanahoria"
    },
    {
      id: 3,
      nombre: "locoto"
    }
  ];
  seleccionVerdura = null;

  colores: any = [
    {
      id: 1,
      nombre: "rojo"
    },
    {
      id: 2,
      nombre: "naranja"
    },
    {
      id: 3,
      nombre: "amarillo"
    }
  ];
  seleccionColor = null;

  change(target) {
    console.log(target);
    this.seleccionColor = target.options[target.options.selectedIndex].text;
  }

  // Input y Output
  usuarios = [];

  /* Aqui estuvo un constructor que instanciaba 
    _http de tipo HttpClient pero debe estar en 
    otro sitio añadiendo otras variables */

  /**
   * Aqui habia un OnInit paro a ayudar a otro tema
   *
   */

  borrarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
  }

  // Reactivee Formes
  signupForm: FormGroup;

  /**
   *
   * aqui habia un constructor
   */

  registrar(values: any) {
    console.log(values);
  }

  verificar() {
    return (
      this.signupForm.get("email").hasError("required") &&
      this.signupForm.get("email").touched
    );
  }

  // Pipes
  regalos: any = [
    { id: 1, nombre: "peluche", precio: 15.5 },
    { id: 2, nombre: "guitarra", precio: 90.5 },
    { id: 3, nombre: "COCHE", precio: 30.5 },
    { id: 4, nombre: "princesa", precio: 50.5 }
  ];

  toggleUppercase = false;

  constructor(
    private _http: HttpClient,
    private _builder: FormBuilder,
    private _lowerCasePipe: LowercasePipe
  ) {
    this.signupForm = this._builder.group({
      nombre: [""],
      usuario: ["", Validators.required],
      email: ["", Validators.compose([Validators.email, Validators.required])],
      clave: ["", Validators.required]
    });
  }

  ngOnInit() {
    this._http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((datos: any[]) => {
        this.usuarios = datos;
      });
    console.log(
      this._lowerCasePipe.transform(
        this.regalos[2].nombre
        )
      );
  }

  // Solicitudes http
  solicitarGet(){
    const headers = new HttpHeaders()
      .set(
        'Authorization', 
        'Bearer "Token"'
      );
    this._http
      .get(
        'https://jsonplaceholder.typicode.com/users', 
        { 
          headers
        } 
      ).subscribe(
        ( res => console.log(res) ),
        ( (err:HttpErrorResponse) => {
          console.log("Ha ocurrido un error");
          console.log(err.message);
        }),
        ( () => console.log("Finalizó solicitud") )
      );
  }

  archivo:any = "";

  enviarPost(){
    let formData = new FormData();
    formData.append('archivo', this.archivo);
    this._http.post(
      'https://jsonplaceholder.typicode.com/users',
      formData,
      {
        headers:{ 'Content-Type': 'multipart/form-data' }
      }
      ).subscribe(
         data => console.log(data)
      );
  }
}
