import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { CreerCollegueComponent } from '../creer-collegue/creer-collegue.component';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  col: Collegue = this.dataservice.recupererCollegueCourant();

  collegueSelectionne: Subscription;

  modifierClient: boolean = false;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {

    this.collegueSelectionne = this.dataservice.subscribeToCollegueSelectedFromMatricule()
    .subscribe(data => {
      console.log(data instanceof Collegue);
      console.log(data.email);
      this.col = data},
    err => {console.log(err)},
    () => {}
    );
  }

  ngOnDestroy(): void {
    this.collegueSelectionne.unsubscribe();
  }



  clickCreerClient(): void {
    console.log('Créer un nouveau collègue');
    let creerCollegueComponentObject = new CreerCollegueComponent(this.dataservice);
    creerCollegueComponentObject.creerCollegue();
  }

  clickModifierClient(): void {
    console.log('Modification du collègue');
    this.modifierClient = !this.modifierClient;
  }

  modifierEmailUrl(emailSaisie, urlSaisie): void {

    if (emailSaisie !== ''){

      this.col.email = emailSaisie;

    }

    if (urlSaisie !== ''){
      this.col.photoUrl = urlSaisie;
    }


    this.modifierClient = !this.modifierClient;

  }

  GetClientFromMatricule(matricule): void {
    this.dataservice.recupererCollegueParMatricule(matricule)
    .subscribe(data => {
      console.log(data instanceof Collegue);
      console.log(data.email);
      this.col.email = data.email}, //new Collegue(data.matricule, data.nom, data.prenoms, data.email, data.dateDeNaissance, data.photoUrl),
    err => {},
    () => {}
    );
  }

}
