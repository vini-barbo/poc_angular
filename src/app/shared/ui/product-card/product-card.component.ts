import { Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) price!: number;
  @Input({ required: true }) productId!: number;
  @Input() picture: SafeUrl = 'https://via.placeholder.com/150';

}
