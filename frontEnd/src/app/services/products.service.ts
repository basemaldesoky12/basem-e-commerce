import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 url = 'http://localhost:3003/api/products/allProducts'
  constructor(
    private http : HttpClient
  ) { }
  getProducts()
  {
   return this.http.get(this.url)
  }
  selectProduct(id : any)
  {
    return this.http.get(`http://localhost:3003/api/products/selectproduct/${id}`)
  }
}
