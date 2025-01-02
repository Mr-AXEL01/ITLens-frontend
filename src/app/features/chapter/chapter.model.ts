import {SurveyEdition} from '../survey-edition/survey-edition.model';

export interface Chapter {
  id: string;
  title: string;
  parentChapter: Chapter;
  subChapters: Chapter[];
  surveyEdition: SurveyEdition;
  questions: Question[];
}

export interface Question {

}
