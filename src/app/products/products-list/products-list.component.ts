import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ProductDto} from "../shared/product.dto";
import {take} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<ProductDto[]> | undefined;

  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productService.getAll();
  }

}
