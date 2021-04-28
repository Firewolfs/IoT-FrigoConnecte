import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProduitService} from "../Services/produit.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  title = 'Mes produits';

  @Input() name: string;

  produits: any[];
  produitSubscription: Subscription;

  constructor(private authService: AuthService,
              private route: Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getAllProduct();
    this.produitSubscription = this.produitService.produitSubject.subscribe(
      (prods: any[]) => {
        this.produits = prods;
      }
    );
    this.produitService.emitProduitSubject();
  }

  onSearchProduct() {
    this.produitService.searchProduct(this.name);
    this.produitSubscription = this.produitService.produitSubject.subscribe(
      (prods: any[]) => {
        this.produits = prods;
      }
    );
    this.produitService.emitProduitSubject();
  }

  onLogout() {
    this.authService.logout();
    this.route.navigate(['']);
  }

}
