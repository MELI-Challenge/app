import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { GetUserService } from './services/get-user.service';
import { HttpService } from './services/http.service';

describe('AppComponent', () => {
  class ApiServiceMock {
    getEndpoint(): string {
      return '';
    }

    getFromApi<TModel>(url: string, options = {}) {
      return Observable;
    }

    getUser() {
      return Observable;
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

  class HttpServiceMock {}
  class GetUserServiceMock {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NgxSkeletonLoaderModule,
        NgbModule,
      ],
      declarations: [AppComponent, HeaderNavComponent],
      providers: [
        { provide: ApiService, useClass: ApiServiceMock },
        { provide: HttpService, useClass: HttpServiceMock },
        { provide: GetUserService, useClass: GetUserServiceMock },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Meli Challenge');
  });
});

@Component({ selector: 'app-header-nav', template: '' })
class HeaderNavComponent {}
