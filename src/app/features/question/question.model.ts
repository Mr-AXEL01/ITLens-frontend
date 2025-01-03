import {EmbeddedChapter} from '../chapter/chapter.model';

export interface Question {
  id: string;
  text: string;
  questionType: QuestionType;
  answerCount: number;
  chapter: EmbeddedChapter;
  answers: EmbeddedAnswer[];
}

export enum QuestionType {
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE"
}

export interface EmbeddedAnswer {
  id: string;
  text: string;
  selectionCount: number;
}
