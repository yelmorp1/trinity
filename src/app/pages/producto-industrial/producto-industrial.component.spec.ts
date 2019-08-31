import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoIndustrialComponent } from './producto-industrial.component';

describe('ProductoIndustrialComponent', () => {
  let component: ProductoIndustrialComponent;
  let fixture: ComponentFixture<ProductoIndustrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoIndustrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
