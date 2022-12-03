import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList :any= []

  constructor() { }

  addToCart(item:any){
    this.cartList.push(item)
  }

}

