import {Survey} from '../survey/models/survey.model';
import {EmbeddedChapter} from "../chapter/chapter.model";

export interface SurveyEdition {
  id: string;
  creationDate: Date;
  startDate: Date;
  year: number;
  survey: Survey;
  chapters: EmbeddedChapter[];
}

export interface SurveyEditionRequest {
  creationDate: Date;
  startDate: Date;
  year: number;
  surveyId: string;
}
