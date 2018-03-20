import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsImmediatComponent } from './resultats-immediat.component';

describe('ResultatsImmediatComponent', () => {
  let component: ResultatsImmediatComponent;
  let fixture: ComponentFixture<ResultatsImmediatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsImmediatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsImmediatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
