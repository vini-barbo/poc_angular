import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/data-access/products.interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  productData!: Observable<IProduct>;

  ngOnInit() {
    const productId = this.route.snapshot.params['id'] as string;
    this.productData = this.getProduct(Number(productId));
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      'https://api.escuelajs.co/api/v1/products/' + id
    );
  }
}
