import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementCrteBancaireComponent } from './paiement-crte-bancaire.component';

describe('PaiementCrteBancaireComponent', () => {
  let component: PaiementCrteBancaireComponent;
  let fixture: ComponentFixture<PaiementCrteBancaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementCrteBancaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementCrteBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
