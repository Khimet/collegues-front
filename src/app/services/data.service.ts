import { Injectable } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  backendUrl: string = environment.backendUrl;
  matriculesTab: string[] = [];
  constructor(private http: HttpClient) { }

  rechercherParNomMocked(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.
    const listMatricules: string[] = [];

    matriculesMock.forEach(matricule => {
      listMatricules.push(matricule.matricule);
    });
    return listMatricules;
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.backendUrl}/collegues?nom=${nom}`);
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return collegueMock;
    }

  subjectCollegueFromSelectedMatricule = new Subject<Collegue>();

    recupererCollegueParMatricule(matricule): Observable<Collegue> {
    return this.http.get<Collegue>(`${this.backendUrl}/collegues/${matricule}`);
  }

  subjectValorisation(matricule: string): Observable<Collegue> {
    return this.recupererCollegueParMatricule(matricule).pipe(
      tap(collegue => this.subjectCollegueFromSelectedMatricule.next(collegue))
    );
  }

  subscribeToCollegueSelectedFromMatricule(): Observable<Collegue> {
    return this.subjectCollegueFromSelectedMatricule.asObservable();
  }



}
