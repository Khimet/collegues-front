import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';
import { CollegueComponent } from '../collegue/collegue.component';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matriculesMock = matriculesMock;
  matricules: string[] = [];
  recherche = false;
  collegueComponentObject = new CollegueComponent(this.dataservice);

  // Injection de la dépendance du service DataService
  constructor(private dataservice: DataService) { }
  ngOnInit(): void {
  }

  rechercher(nom: string): void {
    this.recherche = true;
    this.dataservice.rechercherParNom(nom)
    .subscribe(valeur => this.matricules = valeur,
      err => {},
      () => {});
  }

  clickGetClientFromMatricule(matricule): void {

    this.dataservice.subjectValorisation(matricule).subscribe(
      () => {},
      err => {}
    );

  }

}
