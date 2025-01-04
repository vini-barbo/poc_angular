import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      'https://api.escuelajs.co/api/v1/products/' + id
    );
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      'https://api.escuelajs.co/api/v1/products/'
    );
  }
}
