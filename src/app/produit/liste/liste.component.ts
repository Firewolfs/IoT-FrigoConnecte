import {Component, Input, OnInit} from '@angular/core';
import {ProduitService} from "../../Services/produit.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input() nom: string;
  @Input() quantite: number;

  leProduit: any[];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
  }

}
