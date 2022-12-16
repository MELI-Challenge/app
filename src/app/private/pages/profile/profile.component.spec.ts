import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Observable, of } from 'rxjs';
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule.forRoot()],
      declarations: [ProfileComponent, PurchasesComponent],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-purchases', template: '' })
class PurchasesComponent {}
