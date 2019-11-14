import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-blanca',
  templateUrl: './blanca.component.html',
  styleUrls: ['./blanca.component.css']
})
export class BlancaComponent implements OnInit {

  usuarios:any = [];

  constructor() { 
    let user = new UserService();
    this.usuarios = user.getUsers();
  }

  ngOnInit() {
  }

}
