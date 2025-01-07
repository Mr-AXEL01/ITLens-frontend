import {Chapter} from '../chapter/chapter.model';

export interface Question {
  id: string;
  text: string;
  questionType: QuestionType;
  answerCount: number;
  chapter: Chapter;
  answers: Answer[];
}

export enum QuestionType {
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE"
}


export interface QuestionRequest {
  text: string;
  questionType: QuestionType;
  chapterId: string;
  answers: AnswerRequest[];
}

export interface AnswerRequest {
  text: string;
}

export interface Answer {
  id: string;
  text: string;
  selectionCount: number;
  question: Question;
}
