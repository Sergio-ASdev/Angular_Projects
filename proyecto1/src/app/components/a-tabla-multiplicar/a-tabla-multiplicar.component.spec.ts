import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATablaMultiplicarComponent } from './a-tabla-multiplicar.component';

describe('ATablaMultiplicarComponent', () => {
  let component: ATablaMultiplicarComponent;
  let fixture: ComponentFixture<ATablaMultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATablaMultiplicarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATablaMultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
