import { Component} from '@angular/core';
import { Mood } from '../mood/mood.model';
import { PersonalMood } from './personal-mood.model';
import { PersonalMoodService } from './personal-mood.service';

@Component({
  selector: 'app-personal-mood',
  styleUrls: ['./personal-mood.component.css'],
  templateUrl: './personal-mood.component.html',
})

export class PersonalMoodComponent {
  public personalMoods: PersonalMood[];
  public moods: Mood[];
  columnsToDisplay: string[] = ['moodName', 'currentDate', 'moodReason', 'actions'];

  constructor(private personalMoodService: PersonalMoodService) {
    this.loads();
  }

  public loads() {
    this.personalMoodService.loadPersonalMood().subscribe(result => {
      this.personalMoods = result;
    }, error => console.error(error));

    this.personalMoodService.loadMood().subscribe(result => {
      this.moods = result;
    }, error => console.error(error)); 
  }

  public deletePersonalMood(personalMood: PersonalMood)
  {
    this.personalMoodService.deletePersonalMood(personalMood).subscribe(result => {
      this.loads();
    }, error => console.error(error));
  }

}

