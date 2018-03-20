import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheImmediatComponent } from './recherche-immediat.component';

describe('RechercheImmediatComponent', () => {
  let component: RechercheImmediatComponent;
  let fixture: ComponentFixture<RechercheImmediatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheImmediatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheImmediatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
