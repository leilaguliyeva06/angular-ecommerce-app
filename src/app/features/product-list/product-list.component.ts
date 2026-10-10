import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/interfaces/product.interface';
import { MOCK_PRODUCTS } from '../../shared/models/mocks/product.mock';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = MOCK_PRODUCTS;

  selectedProduct = signal<Product | null>(null);

  openProductDetail(product: Product): void {
    this.selectedProduct.set(product);
  }

  closeDetail(): void { 
    this.selectedProduct.set(null);
  }

  onAddToCart(product: Product): void {
    console.log('Added to cart:', product);
    this.closeDetail();
  }
}