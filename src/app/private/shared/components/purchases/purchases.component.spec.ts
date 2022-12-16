import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../../services/api.service';
import { GetUserService } from '../../../../services/get-user.service';

import { PurchasesComponent } from './purchases.component';

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
      return of({});
    }

    getShipment(shipmentId: string) {
      return Observable;
    }

    getRestrictions(userId: string) {
      return Observable;
    }

    getPurchases(userId: string) {
      return Observable;
    }

    getPayment(paymentId: string) {
      return Observable;
    }

    getLevel(levelId: string) {
      return Observable;
    }
  }
  class GetUserServiceMock {
    userDataBS$ = of({});
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule.forRoot()],
      declarations: [PurchasesComponent],
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
});
