export interface Mood {
  id: number;
  personalMood: string;
  moodDescription: string;
  curiosity: string;
}

export interface Quote {
  quoteID: string,
  moodId: number,
  mood: Mood,
  quoteText: string,
  writer: string;
}
