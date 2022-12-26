import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(
    private foodservice: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable = this.foodservice.getFoodsBySearch(params.searchTerm);
        foodsObservable.subscribe((foods) => (this.foods = foods));
      } else if (params.tag) {
        foodsObservable = this.foodservice.getFoodsByTag(params.tag);
        foodsObservable.subscribe((foods) => (this.foods = foods));
      } else {
        foodsObservable = foodservice.getAll();
        foodsObservable.subscribe((foods) => (this.foods = foods));
      }
    });
  }
}
