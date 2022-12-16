import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Purchase } from 'src/app/public/shared/interfaces/api/purchase.interface';
import { mockPurchase } from '../../../../../../tests/utils/purchase';

import { PurchaseModalDataComponent } from './purchase-modal-data.component';

describe('PurchaseModalDataComponent', () => {
  let component: PurchaseModalDataComponent;
  let fixture: ComponentFixture<PurchaseModalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseModalDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseModalDataComponent);
    component = fixture.componentInstance;
    component.selectedPurchaseData = mockPurchase;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
