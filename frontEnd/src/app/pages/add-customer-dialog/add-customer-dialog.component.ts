import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/adminServices/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  addCustomerForm! : FormGroup
  constructor(private formBuilder : FormBuilder,
    private auth : AuthService,
    public dialogRef : MatDialogRef<AddCustomerDialogComponent>) { }

  ngOnInit(): void {
    this.addCustomerForm = this.formBuilder.group({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      phone : new FormControl(''),
      city : new FormControl(''),
      postCode : new FormControl(''),
      address : new FormControl(''),   
     })
  }
  onClose()
  {
    this.dialogRef.close()
  }
  addCustomer()
  {
     this.auth.addCustomer(this.addCustomerForm.value).subscribe((result : any)=>{
      console.log(result)
     })
  }
}
