import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../product.model";

/**
 * @Price display: A component to show the price of a Product
 */

@Component({
  selector: 'app-product-price',
  template: `
    <p>\${{ price }}</p>
  `,
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
