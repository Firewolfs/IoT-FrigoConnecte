import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./Services/auth.service";
import {AuthGuard} from "./Services/auth.guard";
import { ListeComponent } from './produit/liste/liste.component';
import { ProduitComponent } from './produit/produit.component';
import {HttpClientModule} from "@angular/common/http";
import {ProduitService} from "./Services/produit.service";

const appRoutes: Routes = [
  {path: 'produits', canActivate: [AuthGuard], component: ProduitComponent},
  {path: '', component: ConnexionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ListeComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ProduitService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
