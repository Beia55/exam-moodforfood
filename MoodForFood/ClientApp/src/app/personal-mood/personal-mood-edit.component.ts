import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Mood } from '../mood/mood.model';
import { PersonalMood } from './personal-mood.model';
import { PersonalMoodService } from './personal-mood.service';

@Component({
  selector: 'app-personal-mood-edit',
  styleUrls: ['./personal-mood.component.css'],
  templateUrl: './personal-mood-edit.component.html',
})

export class PersonalMoodEditComponent {
  public id: string;
  public personalMood: PersonalMood = <PersonalMood>{};
  public moods: Mood[];

  constructor(
    private personalMoodService: PersonalMoodService, private router: Router, private activateRouter: ActivatedRoute)
  {
    this.personalMoodService.loadMood().subscribe(result => {
      this.moods = result;
    }, error => console.error(error));
  }

  ngOnInit() {

    this.activateRouter.params.subscribe(param => {
      this.id = param.id;
      this.loadPersonalMood();
    });
  }

  public loadPersonalMood() {
    this.personalMoodService.loadPersonalMoodByID(this.id).subscribe(result => {
      this.personalMood = result;
    }, error => console.error(error))
  }

  public saveEditedPersonalMood() {
    this.personalMoodService.saveEditedPersonalMood(this.id, this.personalMood).subscribe(result => {
      this.router.navigateByUrl("/personal-mood");
    }, error => console.error(error))
  }

}
