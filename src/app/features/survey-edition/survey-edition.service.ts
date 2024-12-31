import { Injectable } from '@angular/core';
import {API_URL} from '../../envirenment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SurveyEdition} from './survey-edition.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyEditionService {
  private readonly path: string = API_URL + "/survey_editions";

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<SurveyEdition[]> {
    return this.http.get<SurveyEdition[]>(this.path);
  }
}
