import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALL_ORDERS_URL, ORDER_CREATE_URL, ORDER_GET_FOR_USER, ORDER_NEW_FOR_CURRENT_USER_URL, ORDER_TRACK_URL } from '../shared/constants/urls';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(
    private http: HttpClient,
  ) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL,order)
  }

  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL);
  }
  getOrderForCurrentUser():Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_GET_FOR_USER);
  }
  trackOrderById(id:number): Observable<Order> {
    return this.http.get<Order>(ORDER_TRACK_URL + id)
  }

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(ALL_ORDERS_URL)
  }

}
