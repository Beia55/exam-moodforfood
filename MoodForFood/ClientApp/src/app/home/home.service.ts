import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalMoodService } from '../personal-mood/personal-mood.service';
import { Food } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private personalMoodService: PersonalMoodService, @Inject('BASE_URL') private baseUrl: string, private router: Router)
  { }

  public loadFood() {
    return this.http.get<Food[]>(this.baseUrl + 'api/foods');
  }

  public loadMood() {
    return this.personalMoodService.loadMood();
  }

  public loadPersonalMood() {
    return this.personalMoodService.loadPersonalMood();
  }

  public saveAddInPersonalMenu(food: Food) {
    return this.http.post(this.baseUrl + 'api/foods', food);
  }
}
