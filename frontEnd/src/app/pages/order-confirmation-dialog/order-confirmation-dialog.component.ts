import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/orderServices/order.service';

@Component({
  selector: 'app-order-confirmation-dialog',
  templateUrl: './order-confirmation-dialog.component.html',
  styleUrls: ['./order-confirmation-dialog.component.css']
})
export class OrderConfirmationDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    public dialogRef : MatDialogRef<OrderConfirmationDialogComponent>,
    private orderService : OrderService
  ) { }

  ngOnInit(): void {
  }
  onClose()
  {
    this.dialogRef.close()
  }
  deleteFromOrders()
  {
      this.orderService.deleteOrder(this.data.order_id).subscribe((result : any)=>{
        console.log(result)
      })
  }
  AddInOrderDetails()
  {
     this.orderService.addInOrderDetails(this.data.product_id,this.data.order_id,this.data.quantity,this.data.subtotal).subscribe((result : any)=>{
      console.log(result)

     })
  }
}
