import { Mood } from "../mood/mood.model";

export interface HeroBanner {
  message: string;
  pictureUrl: string;
}


export interface Food {
  id: string;

  moodID: number;
  mood: Mood;

  FoodForTheMood: string;
  Morning: string;
  Noon: string;
  Evening: string;
}

