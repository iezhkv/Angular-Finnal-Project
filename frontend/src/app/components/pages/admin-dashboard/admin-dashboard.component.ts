import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Food } from 'src/app/shared/models/Food';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users!: User[];
  orders!: Order[];
  foods!: Food[];

  constructor(
    private userService: UserService,
    private foodService: FoodService,
    private orderService: OrderService,

  ) {
    orderService.getAllOrders().subscribe(order => {
      this.orders = order;
    })
  }

  ngOnInit(): void {
  }

}
