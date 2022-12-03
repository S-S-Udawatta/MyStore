import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  active: any;

  constructor(private authService:AuthService, private router:Router, public cartService:CartService) { }


  ngOnInit(): void {
  }

  userLogout() {
    this.authService.loguot();
    this.router.navigate([''])
  }

}



@Component({
  selector: 'ngbd-nav-basic',
  templateUrl: 'dashboard.component.html',
})
export class NgbdNavBasic {
  active = 1;

  constructor(public cartService: CartService) {
  }

  userLogout(){

  }
}
