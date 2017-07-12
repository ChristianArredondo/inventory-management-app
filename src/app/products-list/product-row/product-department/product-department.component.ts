import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../product.model";

/**
 * @Department display: A component to show the price the breadcrumbs to
 * a Product's department
 */

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() department: string[];

  constructor() { }

  ngOnInit() {
  }

}
