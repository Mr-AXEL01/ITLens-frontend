export interface SurveyEdition {
  id: string;
  creationDate: Date;
  startDate: Date;
  year: number;
}

export interface SurveyEditionRequest {
  creationDate: Date;
  startDate: Date;
  year: number;
  surveyId: string;
}
