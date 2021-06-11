import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../home/home.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router)
  { }

  public loadFood() {
    return this.http.get<Food[]>(this.baseUrl + 'api/foods');
  }

  public loadFoodByID(id: string) {
    return this.http.get<Food>(this.baseUrl + 'api/foods/'+id);
  }

  public deleteFood(food: Food) {
    var ans = confirm("Do you want to delete this menu?");
    if (ans) {
      return this.http.delete(this.baseUrl + 'api/foods/' + food.id);
    }
  }

}
