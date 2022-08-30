import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/adminServices/admin.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {
  productForm! : FormGroup
  selectedFile:any
  constructor(private formBuilder : FormBuilder,
    private adminService : AdminService,
    public dialogRef : MatDialogRef<AddProductDialogComponent>,
    private http : HttpClient) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName : new FormControl(''),
      productDescription : new FormControl(''),
      price : new FormControl(''),
      stock : new FormControl(''),
      categoryID : new FormControl('')
    })
  }
  onFileSelected(event : any)
  {
   this.selectedFile=event.target.files[0]
  }
  createProduct()
  {
    this.adminService.addProduct(this.productForm.value,this.selectedFile).subscribe((result : any)=>{
      console.log(result)
    })
  }
  onClose()
  {
    this.dialogRef.close()
  }
}
