import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { RechercheImmediatComponent } from './components/recherche-immediat/recherche-immediat.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { ResultatsImmediatComponent } from './components/resultats-immediat/resultats-immediat.component';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PaiementCrteBancaireComponent } from './components/paiement-crte-bancaire/paiement-crte-bancaire.component';
import { PaiementEspecesComponent } from './components/paiement-especes/paiement-especes.component';

const routes: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'recherche', component: RechercheComponent},
      {path: 'rechercheImmdiat', component: RechercheImmediatComponent},
      {path: 'recap', component: RecapitulatifComponent},
      {path: 'resultatImmediat', component: ResultatsImmediatComponent},
      {path: 'resultat', component: ResultatsComponent},
      {path: 'paiement', component: PaiementComponent},
      {path: 'paiementCarteBancaire', component: PaiementCrteBancaireComponent},
      {path: 'paiementEspeces', component: PaiementEspecesComponent},
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
