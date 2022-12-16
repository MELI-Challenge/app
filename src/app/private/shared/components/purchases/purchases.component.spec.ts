import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Observable, of } from 'rxjs';
import { mockUser } from 'tests/utils/mock-user';
import { mockPurchase } from 'tests/utils/purchase';
import { ApiService } from '../../../../services/api.service';
import { GetUserService } from '../../../../services/get-user.service';
import { PurchasesComponent } from './purchases.component';
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';
import { Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { Purchase } from 'src/app/public/shared/interfaces/api/purchase.interface';
import { mockShipment } from 'tests/utils/mock-shipment';
import { mockPayment } from 'tests/utils/mock-payment';
import { isFormRecord } from '@angular/forms';
registerLocaleData(localeCl, 'es-cl');

describe('PurchasesComponent', () => {
  let component: PurchasesComponent;
  let fixture: ComponentFixture<PurchasesComponent>;

  class ApiServiceMock {
    getEndpoint(): string {
      return '';
    }

    getFromApi<TModel>(url: string, options = {}) {
      return Observable;
    }

    getUser() {
      return of(mockUser);
    }

    getShipment(shipmentId: string) {
      return of(mockShipment);
    }

    getRestrictions(userId: string) {
      return Observable;
    }

    getPurchases(userId: string) {
      return of([mockPurchase]);
    }

    getPayment(paymentId: string) {
      return of(mockPayment);
    }

    getLevel(levelId: string) {
      return Observable;
    }
  }
  class GetUserServiceMock {
    userDataBS$ = of(mockUser);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule.forRoot(), NgbPaginationModule],
      declarations: [PurchasesComponent, PurchaseSummaryComponent],
      providers: [
        { provide: ApiService, useClass: ApiServiceMock },
        { provide: GetUserService, useClass: GetUserServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set all purchases data from services', () => {
    const fullPurchaseData = {
      ...mockPurchase,
      shipment: mockShipment,
      payment: mockPayment,
    };
    expect(component.purchasesData).toEqual([fullPurchaseData]);
    expect(component.purchasesData[0].shipment).not.toBeUndefined();
    expect(component.purchasesData[0].shipment).not.toEqual({});
    expect(component.purchasesData[0].payment).not.toBeUndefined();
    expect(component.purchasesData[0].payment).not.toEqual({});
  });

  it('should set selected purchase data', () => {
    component.setSelectedPurchase(mockPurchase);
    expect(component.selectedPurchaseData).toEqual(mockPurchase);
  });
});

@Component({ selector: 'app-purchase-summary', template: '' })
class PurchaseSummaryComponent {
  @Input('purchase') purchase = {} as Purchase;
  @Input('content') content = {} as TemplateRef<ElementRef>;
}
