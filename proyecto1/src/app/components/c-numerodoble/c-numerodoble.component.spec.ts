import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNumerodobleComponent } from './c-numerodoble.component';

describe('CNumerodobleComponent', () => {
  let component: CNumerodobleComponent;
  let fixture: ComponentFixture<CNumerodobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNumerodobleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNumerodobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
