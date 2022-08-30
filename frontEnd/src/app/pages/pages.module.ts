import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {MatCardModule} from '@angular/material/card';
import { ViewAllProductsAdminComponent } from './view-all-products-admin/view-all-products-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmationDialogComponent } from './order-confirmation-dialog/order-confirmation-dialog.component';
@NgModule({
  declarations: [
    HomeComponent,
    AdminHomeComponent,
    ViewAllProductsAdminComponent,
    AddProductDialogComponent,
    ViewAllCustomersComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent,
    CartComponent,
    OrderConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports : [
    HomeComponent,
    AdminHomeComponent,
    ViewAllProductsAdminComponent,
    ViewAllCustomersComponent
  ]
})
export class PagesModule { }
