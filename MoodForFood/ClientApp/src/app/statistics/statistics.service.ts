import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Statistics } from './statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router)
  { }

  public loadStatistics() {
    return this.http.get<Statistics[]>(this.baseUrl + 'api/statistics');
  }

  public saveAddStatistics(statistics: Statistics) {
    return this.http.post(this.baseUrl + 'api/statistics', statistics);
  }

 
}
