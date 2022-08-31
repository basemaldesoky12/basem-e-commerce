import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OrderService } from 'src/app/services/orderServices/order.service';
import { ProductsService } from 'src/app/services/products.service';
import { OrderConfirmationDialogComponent } from '../order-confirmation-dialog/order-confirmation-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public router:ActivatedRoute,
    private productService : ProductsService,
    public dialog : MatDialog,
    private orderService : OrderService
  ) { }
  helper = new JwtHelperService();
  customerID: any
  public productID=this.router.snapshot.paramMap.get('id')
  productInfo : any
  quantity : any
  price : any
  orderID:any
  ngOnInit(): void {
    const token = localStorage.getItem('token')! 
    const decodedToken = this.helper.decodeToken(token)
    this.customerID=decodedToken.id
    console.log(this.customerID)
    console.log(this.productID)
    this.productService.selectProduct(this.productID).subscribe((result : any)=>{
      console.log(result)
   this.productInfo = result.product
   this.productInfo[0].image = this.productInfo[0].image.replace(/frontEnd\/src\//,"")
   this.price=this.productInfo[0].price
   console.log(this.productInfo[0].image)
    })
  }
  quantityValue(event : any)
  {
    this.quantity=event.target.value
    this.price=this.quantity*this.productInfo[0].price
  }
  // calculatePrice()
  // {
  //    this.price= this.quantity*this.productInfo[0].price
  // }
  // openDialog()
  // {
  //   const dialogConfig= new MatDialogConfig();
  //   dialogConfig.disableClose=true;
  //   dialogConfig.width="50%";
  //   dialogConfig.height="50%";
  //   this.dialog.open(OrderConfirmationDialogComponent,dialogConfig)
  // }
  placeOrder()
  {
    this.orderService.placeOrder(this.customerID).subscribe((result:any)=>{
      console.log(result)
      this.orderID=result.result
      const dialogConfig= new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.width="50%";
      dialogConfig.height="25%";
      dialogConfig.data = {order_id : this.orderID,
                           product_id : this.productID,
                          quantity : this.quantity,
                        subtotal : this.price}
      this.dialog.open(OrderConfirmationDialogComponent,dialogConfig)
    })
  }
}
