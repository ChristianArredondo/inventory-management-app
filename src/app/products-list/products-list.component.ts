import {Component,
  OnInit,
  Input,
  Output,
  EventEmitter} from '@angular/core';

import {Product} from "../product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() onProductSelected = new EventEmitter<Product>();
  currentProduct: Product;

  constructor() { }

  ngOnInit() {
  }
  clicked(product: Product) {
    // console.log('Product hath been clickethed! ');
    // console.log(product);
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product) {
    console.log('Im in! Argument passed = ');
    console.log(product);
    if (!product || !this.currentProduct) {
      return false
    }
    return product.sku === this.currentProduct.sku;
  }
}
