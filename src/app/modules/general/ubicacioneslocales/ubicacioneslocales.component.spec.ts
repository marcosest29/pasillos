import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacioneslocalesComponent } from './ubicacioneslocales.component';

describe('UbicacioneslocalesComponent', () => {
  let component: UbicacioneslocalesComponent;
  let fixture: ComponentFixture<UbicacioneslocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacioneslocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacioneslocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
