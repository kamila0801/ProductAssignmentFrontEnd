import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../shared/products.service";
import {ProductDto} from "../shared/product.dto";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productGroup: FormGroup;

  constructor(private  router: Router,
              private fb:FormBuilder,
              private productService: ProductsService ) {
    this.productGroup = this.fb.group({
      productName : ['', [Validators.required,
        Validators.minLength(4)]],
      productColor : ['', Validators.required],
      productPrice : ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  back() {
    this.router.navigateByUrl('/products');
  }

  save(){
    //console.log('saving customer');
    const values = this.productGroup.value;
    const product :ProductDto = {
      id: 0,
      name: values.productName,
      price: values.productPrice,
      color: values.productColor
    };
    this.productService.create(product).subscribe(product =>
    console.log(product));
  }
}
