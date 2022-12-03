import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../service/product.service";

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.scss']
})
export class WomenProductComponent implements OnInit{
  productList: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getByProductCategory('WOMEN').subscribe(res=>{
      this.productList=res.data.value
    })
  }
}
