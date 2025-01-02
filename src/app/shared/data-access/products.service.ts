import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  async getProducts(endpoint: string): Promise<Observable<IProduct>> {
    const response = await this.http.get<IProduct>(
      'https://api.escuelajs.co/api/v1/products/34'
    );

    return response;
  }
}
