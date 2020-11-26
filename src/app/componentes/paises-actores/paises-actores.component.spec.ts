import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesActoresComponent } from './paises-actores.component';

describe('PaisesActoresComponent', () => {
  let component: PaisesActoresComponent;
  let fixture: ComponentFixture<PaisesActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesActoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
