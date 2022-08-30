import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/adminServices/admin.service';
import { CoreService } from 'src/app/services/core/core.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
customers : any
products : any 
totalCustomers : any
totalProducts : any
latestProducts : any
latestCustomers : any
categories : any
totalCategories : any
  constructor(private adminService : AdminService,
    public nav : CoreService) { }

  ngOnInit(): void {
    this.nav.show()
    this.adminService.getAllCustomers().subscribe((result:any)=>{
      console.log(result)
      this.customers= result.customers
    },err=>{
      console.log(err)
    })
    this.adminService.getAllProducts().subscribe((result : any)=>{
      console.log(result)
      this.products=result.products
    },err=>{
      console.log(err)
    })
    this.adminService.getTotalCustomers().subscribe((result : any)=>{
      console.log(result)
      this.totalCustomers=result.count
    },err=>{
      console.log(err)
    })
    this.adminService.getTotalProducts().subscribe((result : any)=>{
      console.log(result)
      this.totalProducts=result.count
    },err=>{
      console.log(err)
    })
    this.adminService.getAllCategories().subscribe((result : any)=>{
      console.log(result)
      this.categories=result.categories
    },err=>{
      console.log(err)
    })
    this.adminService.getLatestCustomers().subscribe((result : any)=>{
      console.log(result)
      this.latestCustomers=result.latest
      console.log(this.latestCustomers[0])
    },err=>{
      console.log(err)
    })
    this.adminService.getLatestProducts().subscribe((result : any)=>{
      console.log(result)
      this.latestProducts=result.latest
    },err=>{
      console.log(err)
    })
    this.adminService.getTotalCategories().subscribe((result : any)=>{
      console.log(result)
      this.totalCategories=result.count
    },err=>{
      console.log(err)
    })
  }

}
