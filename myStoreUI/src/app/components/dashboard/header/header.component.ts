import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {AllProductComponent} from "../product/all-product/all-product.component";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active: any;

  constructor(private authService:AuthService, private router:Router, public cartService:CartService) { }

  ngOnInit(): void {
  }

  userLogout() {
    this.authService.loguot();
    this.router.navigate([''])
  }


}

/*

@Component({
  selector: 'ngbd-nav-basic',
  templateUrl: './header.component.html',
})
export class NgbdNavBasic {
  active = 1;

  constructor(public cartService: CartService) {
  }

  userLogout(){

  }
}
*/

