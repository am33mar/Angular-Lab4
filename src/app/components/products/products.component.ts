import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { productsList } from '../../models/productsList';
import { IProduct } from '../../models/iproduct';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent,NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  count: number = 0;
  products: IProduct[];
  isDisabled: boolean[] = [];

  constructor() {
    this.products = productsList;
    for (let i = 0; i < productsList.length; i++) {
      this.isDisabled[i] = false;
    }
  }

  removeProductHandler(productId: any) {
    for (let i = 0; i < this.products.length; i++)
      if (this.products[i].id == productId)
        this.products[i].display = false;
  }
  getData(data: any) {
    this.count = data;
  }
}
