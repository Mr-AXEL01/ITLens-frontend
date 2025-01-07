import {SurveyEdition} from '../survey-edition/survey-edition.model';
import {Question} from '../question/question.model';

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



