import { Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/adminServices/admin.service';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
@Component({
  selector: 'app-view-all-products-admin',
  templateUrl: './view-all-products-admin.component.html',
  styleUrls: ['./view-all-products-admin.component.css']
})
export class ViewAllProductsAdminComponent implements OnInit {
  closeResult! : string;
  private modalService! :NgbModal
  productForm! : FormGroup
  products : any 
  constructor( private injector: Injector,
    private adminService : AdminService,
   private formBuilder : FormBuilder,
   public dialog : MatDialog) { }

  ngOnInit(): void {
    console.log("alooooooooooooo")
    // this.adminService.getAllProducts().subscribe((result : any)=>{
    //   console.log(result)
    //   this.products=result.products
    // },err=>{
    //   console.log(err)
    // })
    this.adminService.getAllProducts().subscribe((res : any)=>{
      this.products=res.products
    })
  }
  open() {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
   
    this.dialog.open(AddProductDialogComponent,dialogConfig)
  }
  
 
  createProduct()
  {

  }
}
