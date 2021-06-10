import { Component } from '@angular/core';
import { Mood } from '../mood/mood.model';
import { PersonalMood } from '../personal-mood/personal-mood.model';
import { Food, HeroBanner } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public personalMoods: PersonalMood[];
  public moods: Mood[];
  public foods: Food[];
  public listOfFoodID: string[] = [];

  public personalMood: PersonalMood = <PersonalMood>{};
  public mood: Mood = <Mood>{};
  public food: Food = <Food>{};

  public viewTable: boolean = false;
  public viewHoleHomePage: boolean = false;
  public selectedID: number;
  public selectedName: string;

  public hasMapFoods: Map<number, string> = new Map<number, string>();
  public randomFoodID: string;
  /*public listOfFoodID: string[];*/

  public heroBanners: HeroBanner[] = [
    { message: 'Choose you mood for today', pictureUrl: 'https://png.pngtree.com/thumb_back/fh260/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg' },
    { message: 'Save you mood for today', pictureUrl: 'https://i.pinimg.com/originals/78/6e/22/786e226cd11511d3369aa3ffa9280594.png' },
    { message: 'Ready to cook ?', pictureUrl: 'https://png.pngtree.com/thumb_back/fh260/back_pic/03/53/33/45579720d58a73c.jpg' },
    { message: 'Learn about your moods', pictureUrl: 'https://t3.ftcdn.net/jpg/02/54/20/88/360_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg' },
    { message: 'We will give you useful suggestions ', pictureUrl: 'https://t4.ftcdn.net/jpg/02/44/69/87/360_F_244698725_uWdUNY1oiaHthwcb1NK6IqtPuRNKHor2.jpg' },
  ];


  constructor(private homeService: HomeService) {
    this.loads();
  }

  public loads() {
    this.homeService.loadFood().subscribe(result => {
      this.foods = result;
    }, error => console.error(error));

    this.homeService.loadMood().subscribe(result => {
      this.moods = result;
    }, error => console.error(error));

    this.homeService.loadPersonalMood().subscribe(result => {
      this.personalMoods = result;
    }, error => console.error(error));
  }

  public saveSelectedMoodID(selected) {
    this.selectedID = selected;
    this.viewTable = true;
    this.food.moodID = selected;
    this.foods.push(this.food);

    return this.selectedID;
  }

  public generateRandomMenu() {
    this.listOfFoodID = [];
    let nullElements = 0;

    for (let i = 0; i < this.foods.length; i++) {
      if (this.foods[i].moodID == this.selectedID) {
        if (this.foods[i].id != null) {
          this.listOfFoodID.push(this.foods[i].id);
        }
      }
    }

    for (let i = 0; i < this.listOfFoodID.length; i++) {
      if (this.listOfFoodID[i] != null) {
        this.hasMapFoods.set(i, this.listOfFoodID[i]);
      } else {
        nullElements = 0;
        nullElements++;
      }
    }

    let indexForMap = 0;
    if (this.hasMapFoods.size == 1) {
      indexForMap = 0;
    } else {
      indexForMap = Math.floor((Math.random() * (this.hasMapFoods.size - nullElements)));
    }
    
    this.randomFoodID = this.hasMapFoods.get(indexForMap);
    return this.randomFoodID;
  }

  public completeCriteriaForRandomMenu(selected) {
    this.saveSelectedMoodID(selected);
    this.generateRandomMenu();
  }

  public saveSelectedMoodName(selected) {
    this.selectedName = selected;
    this.personalMood.moodName = selected;
    this.personalMoods.push(this.personalMood);
    return this.selectedName;
  }

  public viewHoleHomePageStatus() {
    this.viewHoleHomePage = true;
    return this.viewHoleHomePage;
  }

}
