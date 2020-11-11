import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuariopersonaComponent } from './formuariopersona.component';

describe('FormuariopersonaComponent', () => {
  let component: FormuariopersonaComponent;
  let fixture: ComponentFixture<FormuariopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuariopersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuariopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
