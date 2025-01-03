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

export interface EmbeddedQuestion {
  id: string;
  text: string;
  questionType: QuestionType;
  answerCount: number;
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

export interface EmbeddedAnswer {
  id: string;
  text: string;
  selectionCount: number;
}
