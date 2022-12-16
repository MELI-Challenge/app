import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Observable, of } from 'rxjs';
import { GetUserService } from 'src/app/services/get-user.service';
import { mockLevel } from 'tests/utils/mock-level';
import { mockPayment } from 'tests/utils/mock-payment';
import { mockRestrictions } from 'tests/utils/mock-restrictions';
import { mockShipment } from 'tests/utils/mock-shipment';
import { mockUser } from 'tests/utils/mock-user';
import { mockPurchase } from 'tests/utils/purchase';
import { ApiService } from '../../../services/api.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

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
      return of(mockRestrictions);
    }

    getPurchases(userId: string) {
      return of([mockPurchase]);
    }

    getPayment(paymentId: string) {
      return of(mockPayment);
    }

    getLevel(levelId: string) {
      return of(mockLevel);
    }
  }

  class GetUserServiceMock {
    userDataBS$ = of(mockUser);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule.forRoot()],
      declarations: [ProfileComponent, PurchasesComponent],
      providers: [
        { provide: ApiService, useClass: ApiServiceMock },
        { provide: GetUserService, useClass: GetUserServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set data', () => {
    expect(component.userData).toEqual(mockUser);
    expect(component.levelData).toEqual(mockLevel);
    expect(component.restrictionsData).toEqual(mockRestrictions);
    expect(component.purchasesData).toEqual([mockPurchase]);
  });
});

@Component({ selector: 'app-purchases', template: '' })
class PurchasesComponent {}
