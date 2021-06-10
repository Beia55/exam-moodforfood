import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PersonalMood } from './personal-mood.model';
import { PersonalMoodService } from './personal-mood.service';

@Component({
  selector: 'app-personal-mood-read',
  styleUrls: ['./personal-mood.component.css'],
  templateUrl: './personal-mood-read.component.html',
})

export class PersonalMoodReadComponent {
  public id: string;
  public personalMood: PersonalMood = <PersonalMood>{};

  constructor(
    private personalMoodService: PersonalMoodService,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit() {

    this.activateRouter.params.subscribe(param => {
      this.id = param.id;
      this.loadSong();
    });
  }

  public loadSong() {
    this.personalMoodService.loadPersonalMoodByID(this.id).subscribe(result => {
      this.personalMood = result;
    }, error => console.error(error))
  }

}
