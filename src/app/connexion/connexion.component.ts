import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  loginForm: FormGroup;
  erreur: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    const formValue = this.loginForm.value;
    let auth = this.authService.login(formValue.login, formValue.password);

    if (auth) {
      this.route.navigate(['liste']);
    } else { this.erreur = true; }
  }

}
