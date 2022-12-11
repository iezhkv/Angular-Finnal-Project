import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  order:Order = new Order();
  constructor(
    orderService: OrderService,
    router: Router,
    private cartService: CartService,
  ) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
        setTimeout(() => {
         router.navigateByUrl(`/track/${this.order.id}`);
        }, 1500);
      },
      error:() => {
        router.navigateByUrl('/checkout-page');
      }
    })
  }

  ngOnInit(): void {
  }

}
