import {SurveyEdition} from '../survey-edition/survey-edition.model';

export interface Chapter {
  id: string;
  title: string;
  parentChapter: Chapter;
  subChapters: Chapter[];
  surveyEdition: SurveyEdition;
  questions: Question[];
}

export interface ChapterRequest {
  title: string;
  surveyEditionId: string;
  chapterId: string;
}

export interface EmbeddedChapter {
  id: string;
  title: string;
  subChapters: EmbeddedChapter[];
}

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
