import { Component, computed, input, linkedSignal, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  readonly product = input.required<Product>();

  readonly close = output<void>();
  readonly addToCart = output<void>();

  readonly images = computed(() => {
    const product = this.product();
    return product.images?.length ? product.images : [product.image];
  });
  readonly selectedImageIndex = linkedSignal(() => {
    this.product();
    return 0;
  });
  
  readonly selectedColor = signal<string>('black');
  readonly activeTab = signal<'overview' | 'specifications'>('overview');

  selectImage(index: number) {
    this.selectedImageIndex.set(index);
  }

  selectColor(color: string) {
    this.selectedColor.set(color);
  }

  setTab(tab: 'overview' | 'specifications') {
    this.activeTab.set(tab);
  }

  onClose() {
    this.close.emit();
  }

  onAddToCart() {
    this.addToCart.emit();
  }
}