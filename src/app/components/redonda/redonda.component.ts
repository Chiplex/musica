import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrefixPipe } from 'src/app/pipes/prefix.pipe';

@Component({
  selector: 'app-redonda',
  templateUrl: './redonda.component.html',
  styleUrls: ['./redonda.component.css'],
  providers: [PrefixPipe]
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
  

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data)=> {
        this.usuarios = data;
      });
    console.log(this._prefix.transform(this.regalos[2].nombre, 'Dia de la amistad: '));
    
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

  // Reactive Forms
  signupForm: FormGroup

  constructor(
    private _http:HttpClient,
    private _builder:FormBuilder,
    private _prefix: PrefixPipe
  ) {
    this.signupForm = this._builder.group({
      nombre:[''],
      usuario:['', Validators.required],
      email:['', Validators.compose(
        [Validators.email, Validators.required]
      )],
      password:['', Validators.required]
    });
  }

  registrar(values){
    console.log(values);
  }

  verificar(campo, regla){
    return this.signupForm.get(campo).hasError(regla) 
        && this.signupForm.get(campo).touched
  }

  // Pipe
  regalos = [
    { id:1, nombre: 'Pelota', precio: 30 },
    { id:2, nombre: 'Coche', precio: 20 },
    { id:3, nombre: 'Muñecas', precio: 10 },
    { id:4, nombre: 'Guitarras', precio: 50 }
  ];

  orderBy = 'asc';
  campo = '';

  toggleOrdenar(campo){
    this.orderBy = this.orderBy == 'asc'? 'desc': 'asc'; 
    this.campo = campo;
  }

  // Solicitudes HTTP
  solicitarGet(){
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer {token}');
    this._http
      .get(
        'https://jsonplaceholder.typicode.com/users',
        {
          headers
        }
      )
      .subscribe(
        ( res => console.log(res)),
        ( (err:HttpErrorResponse) => {
          console.log('hubo un error');
          console.log(err.message);
        }),
        ( () => console.log('Finalizado'))
      );
  }

  archivo:any = null;

  enviarPost(){
    let formdata = new FormData();
    formdata.append('archivo', this.archivo);
    this._http
      .post(
        'https://jsonplaceholder.typicode.com/users',
        formdata,
        {
          headers:{
            'Content-type': 'multipart/form-data'
          }
        }
      )
      .subscribe(
      ( res => console.log(res)),
      ( (err:HttpErrorResponse) => {
        console.log('hubo un error');
        console.log(err.message);
      }),
      ( () => console.log('Finalizado'))
    );
  }
}
