import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'HOOKEMHORNS',
        'Longhorns Hat',
        'http://images.footballfanatics.com/FFImage/thumb.aspx?i=/productImages/_2439000/ff_2439751_full.jpg&w=340',
        ['Men', 'Accessories', 'Hats'],
        19.99
      ),
      new Product(
        'SHOES',
        'Running shoes',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wkxwtl4KrFvlk9W_EPuCyRGvy6ZqKH6uHAd0BA8UarfDo-SRSA',
        ['Men', 'Shoes', 'Running Shoes'],
        89.99
      ),
      new Product(
        'NEATOJACKET',
        'Comfy Jacket',
        'http://dimg.dillards.com/is/image/DillardsZoom/03709447_zi_alaskan_heather?$ecom308x357$',
        ['Men', 'Apparel', 'Jackets and Vests'],
        59.99
      )
    ];
  }

  productIsSelected(product: Product) {
    console.log('Product clicked: ', product);
  }
}
