import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaarchivoComponent } from './cargaarchivo.component';

describe('CargaarchivoComponent', () => {
  let component: CargaarchivoComponent;
  let fixture: ComponentFixture<CargaarchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaarchivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaarchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
