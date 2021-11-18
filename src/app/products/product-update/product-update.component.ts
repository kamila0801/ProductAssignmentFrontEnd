import {Component, Inject, OnInit} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  id: number | undefined;
  productForm = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl('')
  });
  error: any | undefined;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private router: Router) {

  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getById(this.id)
      .subscribe(productFromRest => {
        this.productForm.patchValue({
          name: productFromRest.name,
          color: productFromRest.color,
          price: productFromRest.price
        });
      });
  }

  save() {
    const product = this.productForm.value;
    product.id = this.id;
    this.productService.updateProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/products');
      }, error => {
        this.error=error;
        console.log(error);
      });
  }
}
