export interface Quiz {
  id: number;
  questions: {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface Topic {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  quiz?: Quiz;
}

export interface Unit {
  id: number;
  title: string;
  topics: Topic[];
}