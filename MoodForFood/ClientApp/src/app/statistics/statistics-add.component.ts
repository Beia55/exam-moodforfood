import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Statistics } from './statistics.model';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics-add-component',
  styleUrls: ['./statistics.component.css'],
  templateUrl: './statistics-add.component.html'
})
export class StatisticsAddComponent implements OnInit  {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  hide = true;

  public statistics: Statistics = <Statistics>{};


  constructor(private _formBuilder: FormBuilder, private statisticsService: StatisticsService, private router: Router)
  { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  public saveStatistics() {
    this.statisticsService.saveAddStatistics(this.statistics).subscribe(result => {
      this.router.navigateByUrl("/");
    }, error => console.error(error))
  }
 
}
