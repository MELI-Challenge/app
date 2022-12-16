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
      return Observable;
    }

    getRestrictions(userId: string) {
      return Observable;
    }

    getPurchases(userId: string) {
      return of([mockPurchase]);
    }

    getPayment(paymentId: string) {
      return Observable;
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

  it('should set all data', () => {
    expect(component.purchasesData).toEqual([mockPurchase]);
  });
});

@Component({ selector: 'app-purchase-summary', template: '' })
class PurchaseSummaryComponent {
  @Input('purchase') purchase = {} as Purchase;
  @Input('content') content = {} as TemplateRef<ElementRef>;
}
