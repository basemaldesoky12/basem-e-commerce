import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http : HttpClient
  ) { }
  placeOrder (id : any)
  {
    return this.http.get(`http://localhost:3003/api/order/placeorder/${id}`)
  }
  deleteOrder(id : any)
  {
    return this.http.delete(`http://localhost:3003/api/order/deleteorder/${id}`)
  }
  addInOrderDetails(pid : any, orderid : any, quantity : any, subtotal : any)
  {
     return this.http.get(`http://localhost:3003/api/order/addDetails?pid=${pid}&orderid=${orderid}&quantity=${quantity}&subtotal=${subtotal}`)
  }
}
