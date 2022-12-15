import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getFromApi<TModel>(
    url: string,
    options: Record<string, any>
  ): Observable<TModel> {
    return this.httpClient.get<TModel>(url, options);
  }
}
