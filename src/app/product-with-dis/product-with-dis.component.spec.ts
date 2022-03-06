import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithDisComponent } from './product-with-dis.component';

describe('ProductWithDisComponent', () => {
  let component: ProductWithDisComponent;
  let fixture: ComponentFixture<ProductWithDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
