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
    {id: 1, nom: 'Fromage', quantite: 1},
    {id: 2, nom: 'yaourt au chocolat', quantite: 5},
    {id: 3, nom: 'Paquet de jambon', quantite: 2},
    {id: 4, nom: 'Paquet de saucisson', quantite: 2},
  ];

  constructor() { }

  getAllProduct() {
    // TODO : Remplacer par appel à l'API
    this.liste = this.produits;
    this.emitProduitSubject();
  }

  searchProduct(name: string) {
    // TODO : Remplacer par appel à l'API
    this.liste = this.produits.filter(p => p.nom.includes(name));
    this.emitProduitSubject();
  }

  deleteProduct(id: number) {
    // TODO : Remplacer par appel à l'API
    this.liste = this.produits.filter(p => p.id !== id);
    this.emitProduitSubject();
  }

  emitProduitSubject() { this.produitSubject.next(this.liste.slice()); }

}
