import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-foods-page',
  templateUrl: './foods-page.component.html',
  styleUrls: ['./foods-page.component.css']
})
export class FoodsPageComponent implements OnInit {

  foods!: Food[];


  constructor(
    private foodService:FoodService
  ) {
    foodService.getAll().subscribe(foods => {
      this.foods = foods;
    })
  }

  ngOnInit(): void {
  }

}
