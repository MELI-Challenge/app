import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';

import { ApiService, ServiceId } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  const httpServiceMock = {
    get: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpServiceMock }],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users api endpoint', () => {
    const endpoint = service.getEndpoint('users');
    expect(endpoint).toBe(environment.api.endpoints.users);
  });
  it('should get empty api endpoint', () => {
    const endpoint = service.getEndpoint('wrong' as ServiceId);
    expect(endpoint).toBe('');
  });

  it('users - should call correct endpoint', () => {
    jest.spyOn(httpServiceMock, 'get');
    const expectedUrl = `${environment.api.url}${environment.api.endpoints.users}`;
    service.getUser();
    expect(httpServiceMock.get).toHaveBeenCalledWith(expectedUrl, {});
  });
  it('shipment - should call correct endpoint', () => {
    jest.spyOn(httpServiceMock, 'get');
    const id = '123';
    const parsedEndpoint = environment.api.endpoints.shipments.replaceAll(
      '<shipmentId>',
      id
    );
    const expectedUrl = `${environment.api.url}${parsedEndpoint}`;
    service.getShipment(id);
    expect(httpServiceMock.get).toHaveBeenCalledWith(expectedUrl, {});
  });
  it('restrictions - should call correct endpoint', () => {
    jest.spyOn(httpServiceMock, 'get');
    const id = '123';
    const parsedEndpoint = environment.api.endpoints.restrictions.replaceAll(
      '<userId>',
      id
    );
    const expectedUrl = `${environment.api.url}${parsedEndpoint}`;
    service.getRestrictions(id);
    expect(httpServiceMock.get).toHaveBeenCalledWith(expectedUrl, {});
  });
  it('purchases - should call correct endpoint', () => {
    jest.spyOn(httpServiceMock, 'get');
    const id = '123';
    const parsedEndpoint = environment.api.endpoints.purchases.replaceAll(
      '<userId>',
      id
    );
    const expectedUrl = `${environment.api.url}${parsedEndpoint}`;
    service.getPurchases(id);
    expect(httpServiceMock.get).toHaveBeenCalledWith(expectedUrl, {});
  });
  it('payment - should call correct endpoint', () => {
    jest.spyOn(httpServiceMock, 'get');
    const id = '123';
    const parsedEndpoint = environment.api.endpoints.payments.replaceAll(
      '<paymentId>',
      id
    );
    const expectedUrl = `${environment.api.url}${parsedEndpoint}`;
    service.getPayment(id);
    expect(httpServiceMock.get).toHaveBeenCalledWith(expectedUrl, {});
  });
  it('level - should call correct endpoint', () => {
    jest.spyOn(httpServiceMock, 'get');
    const id = '123';
    const parsedEndpoint = environment.api.endpoints.levels.replaceAll(
      '<levelId>',
      id
    );
    const expectedUrl = `${environment.api.url}${parsedEndpoint}`;
    service.getLevel(id);
    expect(httpServiceMock.get).toHaveBeenCalledWith(expectedUrl, {});
  });
});
