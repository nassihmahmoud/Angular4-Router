import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementEspecesComponent } from './paiement-especes.component';

describe('PaiementEspecesComponent', () => {
  let component: PaiementEspecesComponent;
  let fixture: ComponentFixture<PaiementEspecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementEspecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementEspecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
