import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { ConnexionComponent } from './connexion/connexion.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./Services/auth.service";
import {AuthGuard} from "./Services/auth.guard";
import { ListeComponent } from './liste/liste.component';

const appRoutes: Routes = [
  {path: 'liste', canActivate: [AuthGuard], component: ListeComponent},
  {path: '', component: ConnexionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
