import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nom } from './nom';

describe('Nom', () => {
  let component: Nom;
  let fixture: ComponentFixture<Nom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
