import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MoodComponent } from './mood/mood.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonalMoodComponent } from './personal-mood/personal-mood.component';
import { PersonalMoodAddComponent } from './personal-mood/personal-mood-add.component';
import { PersonalMoodEditComponent } from './personal-mood/personal-mood-edit.component';
import { PersonalMoodReadComponent } from './personal-mood/personal-mood-read.component';

import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { CarouselModule, WavesModule, ButtonsModule, CardsModule } from 'angular-bootstrap-md'
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeAddMenuComponent } from './home/home-add-menu.component';
import { FooterComponent } from './footer/footer.component';
import { StatisticsAddComponent } from './statistics/statistics-add.component';
import { MenuComponent } from './menu/menu.component';
import { MenuReadComponent } from './menu/menu-read.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    StatisticsComponent,
    StatisticsAddComponent,
    MoodComponent,

    PersonalMoodComponent,
    PersonalMoodAddComponent,
    PersonalMoodEditComponent,
    PersonalMoodReadComponent,

    HomeAddMenuComponent,
    FooterComponent,
    MenuComponent,
    MenuReadComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,

    CarouselModule, WavesModule, ButtonsModule, CardsModule,
    MatStepperModule,
    MatFormFieldModule,

    FormsModule, ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'statistics-add', component: StatisticsAddComponent },

      { path: 'mood', component: MoodComponent },

      { path: 'personal-mood', component: PersonalMoodComponent },
      { path: 'personal-mood-add', component: PersonalMoodAddComponent },
      { path: 'personal-mood-edit/:id', component: PersonalMoodEditComponent },
      { path: 'personal-mood-read/:id', component: PersonalMoodReadComponent },
      { path: 'home-add-menu/:id', component: HomeAddMenuComponent },
      { path: 'personal-mood-add/:id', component: PersonalMoodAddComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'menu-read/:id', component: MenuReadComponent },

    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
