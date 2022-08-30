import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/adminServices/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent implements OnInit {

  editCustomerForm = new FormGroup({
    firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      phone : new FormControl(''),
      city : new FormControl(''),
      postCode : new FormControl(''),
      address : new FormControl(''), 
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private formBuilder : FormBuilder,
    private auth : AuthService,
    private admin : AdminService,
    public dialogRef : MatDialogRef<EditCustomerDialogComponent>) { }
    prefilledInputs:any =[] ;
  ngOnInit(): void {
      console.log(this.data.id)
    this.admin.selectOne(this.data.id).subscribe((result : any)=>{
      console.log(result)
     this.prefilledInputs=result.customer
     this.editCustomerForm = this.formBuilder.group({
      firstName : new FormControl(this.prefilledInputs[0].customer_first_name),
      lastName : new FormControl(this.prefilledInputs[0].customer_last_name),
      email : new FormControl(this.prefilledInputs[0].customer_email),
      password : new FormControl(this.prefilledInputs[0].password),
      phone : new FormControl(this.prefilledInputs[0].phone),
      city : new FormControl(this.prefilledInputs[0].city),
      postCode : new FormControl(this.prefilledInputs[0].postcode),
      address : new FormControl(this.prefilledInputs[0].address), 
     })
    })
    // this.editCustomerForm = this.formBuilder.group({
    //   firstName : new FormControl(''),
    //   lastName : new FormControl(''),
    //   email : new FormControl(''),
    //   password : new FormControl(''),
    //   phone : new FormControl(''),
    //   city : new FormControl(''),
    //   postCode : new FormControl(''),
    //   address : new FormControl(''),   
    //  })
  }
  onClose()
  {
    this.dialogRef.close()
  }
  editCustomer()
  {
     this.admin.editCustomer(this.editCustomerForm.value,this.data.id).subscribe((result : any)=>{
      console.log(result)
     })
  }

}
