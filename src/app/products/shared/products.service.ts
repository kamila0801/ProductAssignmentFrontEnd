import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "./product.dto";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {}

  getAll(page: number, items: number): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>("https://localhost:5001/api/Product?CurrentPage="+page+"&ItemsPrPage="+items);
  }

  getById(id: number): Observable<ProductDto> {
    return this._http.get<ProductDto>("https://localhost:5001/api/Product/"+id);
  }

  create(product: ProductDto): Observable<ProductDto>{
    return this._http.post<ProductDto>("https://localhost:5001/api/Product/",product );
  }



  deleteProduct(id: number): Observable<ProductDto>{
    return this._http.delete<ProductDto>("https://localhost:5001/api/Product/"+id)
  }

  updateProduct(product: ProductDto): Observable<ProductDto> {
    return this._http.put<ProductDto>("https://localhost:5001/api/Product", product);
  }
}
