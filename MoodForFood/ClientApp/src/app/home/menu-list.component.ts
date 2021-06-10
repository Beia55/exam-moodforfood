import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './home.model';

@Component({
  selector: 'app-menu-list',
  styleUrls: ['../personal-mood/personal-mood.component.css'],
  templateUrl: './menu-list.component.html',
})

export class MenuListComponent {
  public foods: Food[];
  columnsToDisplay: string[] = ['foodForTheMood', 'morning', 'noon', 'evening'];

  constructor(private http1: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadPersonalMood();
  }

  public loadPersonalMood() {
    this.http1.get<Food[]>(this.baseUrl + 'api/foods').subscribe(result => {
      this.foods = result;
    }, error => console.error(error)); 
  }

}

