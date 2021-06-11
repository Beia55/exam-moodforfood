import { Component, OnInit } from '@angular/core';
import { Food } from '../home/home.model';
import { Mood } from '../mood/mood.model';
import { MoodService } from '../mood/mood.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
  }

  public foods: Food[];
  public moods: Mood[];

  columnsToDisplay: string[] = ['moodID','foodForTheMood', 'morning', 'noon', 'evening', 'action'];

  constructor(private menuService: MenuService, private moodService: MoodService) {
    this.loadPersonalMood();
  }

  public loadPersonalMood() {
    this.menuService.loadFood().subscribe(result => {
      this.foods = result;
    }, error => console.error(error));
  }

  public loadMood() {
    this.moodService.loadMood().subscribe(result => {
      this.moods = result;
    }, error => console.error(error));
  }

  public deleteFood(food: Food) {
    this.menuService.deleteFood(food).subscribe(result => {
      this.loadPersonalMood();
    }, error => console.error(error));
  }

}
