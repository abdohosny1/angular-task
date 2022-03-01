import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProductDetailsComponent } from './get-all-product-details.component';

describe('GetAllProductDetailsComponent', () => {
  let component: GetAllProductDetailsComponent;
  let fixture: ComponentFixture<GetAllProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
