import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsAdminComponent } from './view-all-products-admin.component';

describe('ViewAllProductsAdminComponent', () => {
  let component: ViewAllProductsAdminComponent;
  let fixture: ComponentFixture<ViewAllProductsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProductsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllProductsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
