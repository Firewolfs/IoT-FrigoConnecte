import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.route.navigate(['']);
  }

}
