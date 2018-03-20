import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { RechercheImmediatComponent } from './components/recherche-immediat/recherche-immediat.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { ResultatsImmediatComponent } from './components/resultats-immediat/resultats-immediat.component';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PaiementCrteBancaireComponent } from './components/paiement-crte-bancaire/paiement-crte-bancaire.component';
import { PaiementEspecesComponent } from './components/paiement-especes/paiement-especes.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RechercheComponent,
    RechercheImmediatComponent,
    ResultatsComponent,
    ResultatsImmediatComponent,
    RecapitulatifComponent,
    PaiementComponent,
    PaiementCrteBancaireComponent,
    PaiementEspecesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
