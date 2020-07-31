import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matriculesMock = matriculesMock;
  recherche = false;

  constructor() { }

  ngOnInit(): void {
  }

  rechercher(): void {
    this.recherche = true;
  }

}
