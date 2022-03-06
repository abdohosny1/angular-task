import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithoutDisComponent } from './product-without-dis.component';

describe('ProductWithoutDisComponent', () => {
  let component: ProductWithoutDisComponent;
  let fixture: ComponentFixture<ProductWithoutDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithoutDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithoutDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
