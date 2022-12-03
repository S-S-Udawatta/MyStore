import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ProductDto} from "../../dto/ProductDto";
import {Router} from "@angular/router";



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  active: any;
  addItemGroup = new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    unitPrice: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    tumbnail: new FormControl(null,[Validators.required])
  });
  updateItemGroup = new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    unitPrice: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    tumbnail: new FormControl(null,[Validators.required])
  });
  productList: any;

  constructor(private authService: AuthService, private productService:ProductService, private router: Router, ) { }

  ngOnInit(): void {
    this.productService.listProduct().subscribe(response=>{
      this.productList = response.data.value
    })
  }

  userLogout() {
    this.authService.loguot();
    this.router.navigate([''])
  }

  addItem() {
    let Product = new ProductDto(
      this.addItemGroup.get('id')?.value,
      this.addItemGroup.get('name')?.value,
      this.addItemGroup.get('description')?.value,
      this.addItemGroup.get('unitPrice')?.value,
      this.addItemGroup.get('category')?.value,
      this.addItemGroup.get('tumbnail')?.value,

    );
    this.productService.saveProduct(Product).subscribe(response=>{
      console.log(response)
    },error => {
      console.log(error)
    })
  }

  updateItem() {
    let Product = new ProductDto(
      this.updateItemGroup.get('id')?.value,
      this.updateItemGroup.get('name')?.value,
      this.updateItemGroup.get('description')?.value,
      this.updateItemGroup.get('unitPrice')?.value,
      this.updateItemGroup.get('category')?.value,
      this.updateItemGroup.get('tumbnail')?.value,

    );
    this.productService.updateProduct(Product).subscribe(response=>{
      console.log(response)
    },error => {
      console.log(error)
    })
  }

  deleteItem(id:any) {
    this.productService.deleteItem(id).subscribe(response=>{
      console.log(response)
    },error=>{
      console.log(error)
    })
  }



}

