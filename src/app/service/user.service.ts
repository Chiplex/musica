import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;
  constructor() { }

  getUsers(): any {
    throw new Error("Method not implemented.");
  }
}
