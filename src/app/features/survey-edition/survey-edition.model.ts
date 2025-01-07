import {Survey} from '../survey/models/survey.model';
import {Chapter} from "../chapter/chapter.model";

export interface SurveyEdition {
  id: string;
  creationDate: Date;
  startDate: Date;
  year: number;
  survey: Survey;
  chapters: Chapter[];
}

export interface SurveyEditionRequest {
  creationDate: Date;
  startDate: Date;
  year: number;
  surveyId: string;
}
