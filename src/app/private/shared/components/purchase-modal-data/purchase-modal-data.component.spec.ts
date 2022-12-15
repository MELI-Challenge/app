import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseModalDataComponent } from './purchase-modal-data.component';

describe('PurchaseModalDataComponent', () => {
  let component: PurchaseModalDataComponent;
  let fixture: ComponentFixture<PurchaseModalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseModalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseModalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
