import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Level } from '../public/shared/interfaces/api/level.interface';
import { Payment } from '../public/shared/interfaces/api/payment.interface';
import { Purchase } from '../public/shared/interfaces/api/purchase.interface';
import { Restriction } from '../public/shared/interfaces/api/restriction.interface';
import { Shipment } from '../public/shared/interfaces/api/shipment.interface';
import { User } from '../public/shared/interfaces/api/user.interface';
import { HttpService } from './http.service';

export type ServiceId =
  | 'users'
  | 'shipments'
  | 'restrictions'
  | 'purchases'
  | 'payments'
  | 'levels';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.api.url;

  constructor(private httpService: HttpService) {}

  getEndpoint(serviceId: ServiceId): string {
    return environment.api.endpoints[serviceId] || '';
  }

  getFromApi<TModel>(url: string, options = {}) {
    return this.httpService.getFromApi<TModel>(url, options);
  }

  getUser() {
    const endpoint = this.getEndpoint('users');
    const url = `${this.apiUrl}${endpoint}`;
    return this.getFromApi<User>(url);
  }

  getShipment(shipmentId: string) {
    let endpoint = this.getEndpoint('shipments');
    endpoint = endpoint.replaceAll('<shipmentId>', shipmentId);
    const url = `${this.apiUrl}${endpoint}`;
    return this.getFromApi<Shipment>(url);
  }

  getRestrictions(userId: string) {
    let endpoint = this.getEndpoint('restrictions');
    endpoint = endpoint.replaceAll('<userId>', userId);
    const url = `${this.apiUrl}${endpoint}`;
    return this.getFromApi<Restriction[]>(url);
  }

  getPurchases(userId: string) {
    let endpoint = this.getEndpoint('purchases');
    endpoint = endpoint.replaceAll('<userId>', userId);
    const url = `${this.apiUrl}${endpoint}`;
    return this.getFromApi<Purchase[]>(url);
  }

  getPayment(paymentId: string) {
    let endpoint = this.getEndpoint('payments');
    endpoint = endpoint.replaceAll('<paymentId>', paymentId);
    const url = `${this.apiUrl}${endpoint}`;
    return this.getFromApi<Payment>(url);
  }

  getLevel(levelId: string) {
    let endpoint = this.getEndpoint('levels');
    endpoint = endpoint.replaceAll('<levelId>', levelId);
    const url = `${this.apiUrl}${endpoint}`;
    return this.getFromApi<Level>(url);
  }
}
