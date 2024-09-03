import { NgClass } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnChanges {
  numberOfProducts: number = 0;
  previousValue: string = '';
  currentValue: string = '';
  
  @Input() myProduct: any;
  @Output() OnRemoveProduct = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['myProduct']) {
      const currentProduct = changes['myProduct'].currentValue;
      const previousProduct = changes['myProduct'].previousValue;

      if (previousProduct && currentProduct && currentProduct.id === previousProduct.id) {
        // Update previousValue only if the same product is updated
        this.previousValue = previousProduct.price;
      }
      if (currentProduct) {
        // Update currentValue to the current price
        this.currentValue = currentProduct.price;
      }
    }
  }

  @Output() onAddProduct = new EventEmitter();

  addToCart() {
    this.numberOfProducts++;
    this.onAddProduct.emit(this.numberOfProducts);
  }

  removeProduct(productId: any) {
    this.OnRemoveProduct.emit(productId);
  }

  editProductPrice(id: number) {
    id--;
    if (this.myProduct) {
      this.previousValue = this.myProduct.price.toString();
      this.myProduct.price *= 0.9;
      this.currentValue = this.myProduct.price.toString();
      this.myProduct.discounted = true;
    }
  }
}
