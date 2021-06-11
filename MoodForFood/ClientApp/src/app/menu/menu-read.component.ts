import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../home/home.model';
import { MoodService } from '../mood/mood.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu-read',
  templateUrl: './menu-read.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuReadComponent implements OnInit {

  public id: string;
  public food: Food = <Food>{};


  constructor(private menuService: MenuService,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit() {

    this.activateRouter.params.subscribe(param => {
      this.id = param.id;
      this.loadFoodByID();
    });
  }

  public loadFoodByID() {
    this.menuService.loadFoodByID(this.id).subscribe(result => {
      this.food = result;
    }, error => console.error(error))
  }

}
