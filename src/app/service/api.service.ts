import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from '@angular/common/http';

import { LoginResponse } from '../interface/login-response';
import { LoginRequest } from '../interface/login-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  api_url = "http://127.0.0.1:8000/api";

  login(request:LoginRequest): Observable<LoginResponse>{
    return this._http.post<LoginResponse>(
      `${this.api_url}/auth/login`,
      request
    );
  }
}
