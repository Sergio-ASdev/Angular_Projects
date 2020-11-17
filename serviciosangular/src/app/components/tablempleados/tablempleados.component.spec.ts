import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablempleadosComponent } from './tablempleados.component';

describe('TablempleadosComponent', () => {
  let component: TablempleadosComponent;
  let fixture: ComponentFixture<TablempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
