import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ApiService } from 'src/app/service/api.service';
import { LoginRequest } from 'src/app/interface/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginRequest: LoginRequest = {
    email: '',
    password: ''
  };

  constructor(
    public _user: UserService, 
    private _api: ApiService,
    ) { }

  ngOnInit() {
  }

  public login(): void{    
    this._api.login(this.loginRequest).subscribe(res => {      
      if (res.access_token) {
        this._user.user = res.user;
      } 
    })
  }
}
