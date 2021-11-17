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
  selectedProduct$: Observable<ProductDto> | undefined;

  page: number = 1;
  items: number = 3;

  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productService.getAll(this.page, this.items);
  }

  getById(id: number): void{
    this.selectedProduct$ = this._productService.getById(id);
  }

  hideDetails() {
    this.selectedProduct$ = undefined;
  }

  loadMore() {
    this.items = this.items*2;
    this.products$ = this._productService.getAll(this.page, this.items);
  }

  deleteProduct(id: number){
    this.selectedProduct$ = this._productService.deleteProduct(id);
    window.location.reload();
}
}
