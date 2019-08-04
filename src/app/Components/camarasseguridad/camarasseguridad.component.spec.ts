import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamarasseguridadComponent } from './camarasseguridad.component';

describe('CamarasseguridadComponent', () => {
  let component: CamarasseguridadComponent;
  let fixture: ComponentFixture<CamarasseguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamarasseguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamarasseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
