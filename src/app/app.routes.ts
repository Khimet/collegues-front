import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { CollegueComponent } from './collegue/collegue.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component: CollegueComponent },
  { path: 'apropos', component: AProposComponent },

  {path: '', pathMatch: 'full', redirectTo: '/accueil'}
];
