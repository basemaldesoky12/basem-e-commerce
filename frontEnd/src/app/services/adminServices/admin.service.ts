import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
routes = ['http://localhost:3003/api/admin/getAllCustomers','http://localhost:3003/api/admin/getAllProducts','http://localhost:3003/api/admin/getTotalCustomers',
          'http://localhost:3003/api/admin/getTotalProducts',
        'http://localhost:3003/api/admin/getAllCategories',
         'http://localhost:3003/api/admin/getLatestProducts',
        'http://localhost:3003/api/admin/getLatestCustomers',
        'http://localhost:3003/api/admin/getTotalCategories',]
  constructor(
    private http : HttpClient
  ) { }
  getAllCustomers()
  {
    return this.http.get(this.routes[0])
  }
  getAllProducts()
  {
    return this.http.get(this.routes[1])
  }
  getTotalCustomers()
  {
    return this.http.get(this.routes[2])
  }
  getTotalProducts()
  {
    return this.http.get(this.routes[3])
  }
  getAllCategories()
  {
    return this.http.get(this.routes[4])
  }
  getLatestCustomers()
  {
    return this.http.get(this.routes[6])
  }
  getLatestProducts()
  {
    return this.http.get(this.routes[5])
  }
  getTotalCategories()
  {
    return this.http.get(this.routes[7])
  }
  addProduct(body : any,image : any)
  {
     const formData = new FormData()
    formData.append('image',image,image.name)
    formData.append('productName',JSON.stringify(body.productName))
    formData.append('productDescription',JSON.stringify(body.productDescription))
    formData.append('price',JSON.stringify(body.price))
    formData.append('stock',JSON.stringify(body.stock))
    formData.append('categoryID',JSON.stringify(body.categoryID))
    return this.http.post(`http://localhost:3003/api/admin/addProduct`,formData)
  }
  deleteCustomer(id:any)
  {
   return this.http.delete(`http://localhost:3003/api/customers/deletecustomer/${id}`)
  }
  editCustomer(data : any,id : any)
  {
    return this.http.put(`http://localhost:3003/api/customers/editCustomer/${id}`,data)
  }
  selectOne(id:any)
  {
    return this.http.get(`http://localhost:3003/api/customers/selectone/${id}`)
  }
}
