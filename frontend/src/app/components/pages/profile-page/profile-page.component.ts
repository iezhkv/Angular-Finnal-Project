import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user!: User;
  orders!: Order[]

  constructor(
    private userService:UserService,
    private orderService: OrderService,
  ) {
    this.user = userService.currentUser;

    orderService.getOrderForCurrentUser().subscribe(order => {
      this.orders = order;
    })
  }

  ngOnInit(): void {

  }

  logOrders() {
    console.log(this.orders)
  }

}
