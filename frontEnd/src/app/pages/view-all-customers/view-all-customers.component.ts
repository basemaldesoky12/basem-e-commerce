import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/adminServices/admin.service';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {
  customers! : any 
  
  constructor(private adminService : AdminService,
    private formBuilder : FormBuilder,
    public dialog : MatDialog) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe((result:any)=>{
      this.customers = result.customers
    })
  }
  open()
  {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
   
    this.dialog.open(AddCustomerDialogComponent,dialogConfig)
  }
  deleteCustomer (id:any)
  {
    this.adminService.deleteCustomer(id).subscribe((result)=>{
      console.log(result)
      this.ngOnInit()
    },err=>{
      console.log(err)
    })
  }
  openEdit(id:any)
  {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
   dialogConfig.data={id : id }
    this.dialog.open(EditCustomerDialogComponent,dialogConfig)
  }
}
