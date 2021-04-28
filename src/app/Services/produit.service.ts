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
    {nom: 'Paquet de saucisson', quantite: 2},
  ];

  constructor() { }

  getAllProduct() {
    // TODO : Remplacer par appel à l'API
    this.liste = this.produits;
    this.emitProduitSubject();
  }

  searchProduct(name: string) {
    this.liste = this.produits.filter(p => p.nom.includes(name));
    this.emitProduitSubject();
  }

  emitProduitSubject() { this.produitSubject.next(this.liste.slice()); }

}
