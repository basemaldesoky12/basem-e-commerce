import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : any
  string : string = "../../../../../"
  constructor(
    private productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response : any)=>{
      this.products=response.products
      for(let i =0; i<this.products.length;i++)
      {
        this.products[i].image = this.products[i].image.replace(/frontEnd\/src\//,"")
      }
      console.log(this.products[2].image)
      console.log(response)
    })
  }

}
