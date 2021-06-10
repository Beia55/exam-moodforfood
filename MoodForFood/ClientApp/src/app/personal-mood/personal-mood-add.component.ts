import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mood } from '../mood/mood.model';
import { PersonalMood } from './personal-mood.model';
import { PersonalMoodService } from './personal-mood.service';

@Component({
  selector: 'app-personal-mood-add',
  styleUrls: ['./personal-mood.component.css'],
  templateUrl: './personal-mood-add.component.html',
})

export class PersonalMoodAddComponent {
  public personalMood: PersonalMood = <PersonalMood>{};
  public moods: Mood[];
  public moodName: string;
  public isReadOnly : true;

  constructor(private personalMoodService: PersonalMoodService, private router: Router, private activateRouter: ActivatedRoute)
  {
    this.personalMoodService.loadMood().subscribe(result => {
      this.moods = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(param => {
      this.moodName = param.id;
      this.personalMood.moodName = this.moodName;
    });
  }

  public savePersonalMood() {
    this.personalMoodService.saveAddPersonalMood(this.personalMood).subscribe(result => {
      this.router.navigateByUrl("/personal-mood");
    }, error => console.error(error))
  }

}
