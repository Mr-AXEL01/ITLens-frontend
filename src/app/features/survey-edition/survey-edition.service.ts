import { Injectable } from '@angular/core';
import {API_URL} from '../../envirenment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SurveyEdition, SurveyEditionRequest} from './survey-edition.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyEditionService {
  private readonly path: string = API_URL + "/survey_editions";

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<SurveyEdition[]> {
    return this.http.get<SurveyEdition[]>(this.path);
  }

  public getById(id: string): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.path}/${id}`);
  }

  public create(request: SurveyEditionRequest): Observable<SurveyEdition> {
    return this.http.post<SurveyEdition>(this.path, request);
  }

  public update(id: string, request: SurveyEditionRequest): Observable<SurveyEdition> {
    return this.http.put<SurveyEdition>(`${this.path}/${id}`, request);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.path}/${id}`);
  }
}
