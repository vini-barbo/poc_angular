import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../shared/ui/product-card/product-card.component';
import { ProductsService } from '../shared/data-access/products.service';
import { IProduct } from '../shared/data-access/products.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, ProductCardComponent],
  template: `
    <main>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <app-product-card
          (click)="handleClickRedirectToProductPage(productData.id)"
          *ngFor="let productData of products | async"
          [price]="productData.price"
          [name]="productData.title"
          [productId]="productData.id"
          [picture]="getSafeUrl(productData.images[0])"
        />
      </div>
    </main>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}
  product!: Observable<IProduct>;
  products!: Observable<IProduct[]>;

  ngOnInit() {
    this.product = this.getProduct(34);
    this.products = this.getProducts();
  }

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

  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  handleClickRedirectToProductPage = (id: number) => {
    this.router.navigate([`/product/${id}`]);
  };
}
