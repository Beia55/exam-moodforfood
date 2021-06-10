import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Mood } from '../mood/mood.model';
import { PersonalMood } from './personal-mood.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalMoodService {

  constructor(private http1: HttpClient, private http2: HttpClient, @Inject('BASE_URL') private baseUrl: string)
  { }

  public loadPersonalMood() {
    return this.http1.get<PersonalMood[]>(this.baseUrl + 'api/personalmoods');
  }

  public loadPersonalMoodByID(id: string) {
    return this.http1.get<PersonalMood>(this.baseUrl + 'api/personalmoods/' + id);
  }

  public saveAddPersonalMood(personalMood: PersonalMood) {
    return this.http1.post(this.baseUrl + 'api/personalmoods', personalMood);
  }

  public saveEditedPersonalMood(id: string, personalMood: PersonalMood) {
    return this.http1.put<PersonalMood>(this.baseUrl + 'api/personalmoods/' + id, personalMood);
  }

  public deletePersonalMood(personalMood: PersonalMood) {
    var ans = confirm("Do you want to delete your personal moods: " + personalMood.moodName);
    if (ans) {
      return this.http1.delete(this.baseUrl + 'api/personalmoods/' + personalMood.id);
    }
  }

  public loadMood() {
    return this.http2.get<Mood[]>(this.baseUrl + 'api/moods');
  }

}
