import {SurveyEdition} from '../survey-edition/survey-edition.model';
import {EmbeddedQuestion} from '../question/question.model';

export interface Chapter {
  id: string;
  title: string;
  parentChapter: Chapter;
  subChapters: Chapter[];
  surveyEdition: SurveyEdition;
  questions: EmbeddedQuestion[];
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


