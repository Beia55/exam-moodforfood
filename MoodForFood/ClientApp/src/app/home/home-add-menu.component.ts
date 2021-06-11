import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Food } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-add-menu',
  styleUrls: ['../personal-mood/personal-mood.component.css'],
  templateUrl: './home-add-menu.component.html',
})

export class HomeAddMenuComponent {
  public food: Food = <Food>{};
  public foods: Food[];

  public moodID: number; 

  constructor(private homeService: HomeService, private activateRouter: ActivatedRoute, private router: Router)
  { }

  ngOnInit() {

    this.activateRouter.params.subscribe(param => {
      this.moodID = param.id;
      this.food.moodID = this.moodID;
    });
  }

  public saveInPersonalMenu() {
    this.homeService.saveAddInPersonalMenu(this.food).subscribe(result => {
      return this.router.navigateByUrl("/menu");
    }, error => console.error(error))
  }

}
