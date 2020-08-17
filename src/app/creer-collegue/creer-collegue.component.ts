import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  nouveauCollegue = new Collegue(this.dataservice.genererMatricule(), '', '', '', null, '');

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    //this.nouveauCollegue = this.dataservice.recupererCollegueCourant();
  }

  /*public creerCollegue(): void {

    this.nouveauCollegue.matricule = this.dataservice.genererMatricule();
  }*/

}
