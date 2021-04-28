import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  produitSubject = new Subject<any[]>();
  private liste = [];

  // Temporaire
  private produits = [
    {nom: 'Fromage', quantite: 1},
    {nom: 'yaourt au chocolat', quantite: 5},
    {nom: 'Paquet de jambon', quantite: 2},
  ];

  constructor() { }

  getAllProduct() {
    // TODO : Remplacer par appel à l'API
    this.liste = this.produits;
    this.emitProduitSubject();
  }

  emitProduitSubject() { this.produitSubject.next(this.liste.slice()); }

}