import { Component } from '@angular/core';
import { Collegue } from './models/Collegue';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';

  constructor(private dataservice: DataService){}

  //unObjetCollegueFourni: Collegue = this.dataservice.recupererCollegueCourant();
}
