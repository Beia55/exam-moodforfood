import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalMoodService } from '../personal-mood/personal-mood.service';
import { Quote } from './mood.model';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(private http: HttpClient, private personalMoodService: PersonalMoodService, @Inject('BASE_URL') private baseUrl: string, private router: Router)
  { }

  public loadMood() {
    return this.personalMoodService.loadMood();
  }

  public loadQuote() {
    return this.http.get<Quote[]>(this.baseUrl + 'api/quotes');
  }

}
