import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../product.model";

/**
 * @Image display: A component to show the image of a Product
 */

@Component({
  selector: 'app-product-image',
  template: `
    <img class="img-responsive" [src]="product.imageUrl" alt="product.name" width="200">
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
