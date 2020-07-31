import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;

  modifierClient: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickCreerClient(): void {
    console.log('Créer un nouveau collègue');
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

}
