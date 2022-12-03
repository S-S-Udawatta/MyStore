import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../service/product.service";

@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrls: ['./men-product.component.scss']
})
export class MenProductComponent implements OnInit {
  productList: any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getByProductCategory('MEN').subscribe(res=>{
      this.productList=res.data.value
      console.log(res)
    })

  }


}
