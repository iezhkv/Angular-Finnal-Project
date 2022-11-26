import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartTotalPrice =0;
  constructor(
    cartService:CartService
  ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartTotalPrice = newCart.totalPrice;
    })
   }

  ngOnInit(): void {
  }

}
