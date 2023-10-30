import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearubicacionesComponent } from './crearubicaciones.component';

describe('CrearubicacionesComponent', () => {
  let component: CrearubicacionesComponent;
  let fixture: ComponentFixture<CrearubicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearubicacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearubicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
