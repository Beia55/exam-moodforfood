import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Mood, Quote } from './mood.model';
import { MoodService } from './mood.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html'
})
export class MoodComponent {
  public moods: Mood[];
  public quotes: Quote[];

  public mood: Mood = <Mood>{};
  public selectedMoodID: number;

  public hasMapQuotes: Map<number, string> = new Map<number, string>();
  public randomQuoteID: string;

  public listOfQuotesID: string[];
  public viewQuote: boolean = false;

  public selectedMoodAtribute: string;

  constructor(private moodService: MoodService) {
    this.moodService.loadMood().subscribe(result => {
      this.moods = result;
    }, error => console.error(error));

    this.moodService.loadQuote().subscribe(result => {
      this.quotes = result;
    }, error => console.error(error));
  }

  public generateRandomQuote () {
    this.listOfQuotesID = this.quotes.map((quote) => quote.quoteID);

    for (let i = 0; i < this.listOfQuotesID.length; i++) {
      this.hasMapQuotes.set(i, this.listOfQuotesID[i]);
    }

    let indexForMap = Math.floor((Math.random() * this.listOfQuotesID.length));
    this.randomQuoteID = this.hasMapQuotes.get(indexForMap);
    this.viewQuote = true;

    return this.randomQuoteID;
  }

  public saveSelectedMoodID(selected) {
    this.selectedMoodID = selected;

    return this.selectedMoodID;
  }

  public showMoodDefinition(selected) {
    this.saveSelectedMoodID(selected);
    this.selectedMoodAtribute = "definition";
    console.log(this.selectedMoodID, this.selectedMoodAtribute);
    return this.selectedMoodAtribute;
  }

  public showMoodCuriosity(selected) {
    this.saveSelectedMoodID(selected);
    this.selectedMoodAtribute = "curiosity";
    console.log(this.selectedMoodID, this.selectedMoodAtribute);
    return this.selectedMoodAtribute;
  }

}

