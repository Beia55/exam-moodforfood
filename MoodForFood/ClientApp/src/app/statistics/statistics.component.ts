import { Component } from '@angular/core';
import { Statistics } from './statistics.model';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics.component',
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent {

/*public statistics: Statistics = <Statistics>{};*/
  public statistics: Statistics[];


  constructor(private statisticsService: StatisticsService) {
    this.statisticsService.loadStatistics().subscribe(result => {
      this.statistics = result;
    }, error => console.error(error));
  }
 
}
