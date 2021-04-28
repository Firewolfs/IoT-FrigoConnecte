import { Injectable } from '@angular/core';
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;
  private user: User

  // Temporaire
  private users = [
    new User(1, 'Daniel', 'OVEJERO', 'd.ovejero', 'Daniel1'),
    new User(2, 'Stephane', 'BACCAM', 's.baccam', 'Stephane1'),
    new User(3, 'Christo', 'LEGUILLIER', 'c.leguillier', 'Christo1'),
  ];

  public get IsAuth(): boolean {
    return this.isAuth;
  }

  public get User(): User {
    return this.user;
  }

  constructor() {}

  login(login: string, password: string) {
    // TODO : Remplacer par appel à l'API
    this.users.forEach((u) => {
      if (u.Login === login && u.Password === password) {
        this.user = u;
        this.isAuth = true;
      }
    });

    return this.isAuth;
  }

  logout() {
    this.isAuth = false;
    this.user = undefined;
  }
}
