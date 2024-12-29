import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../models/survey.model';
import {API_URL} from '../../../envirenment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private readonly path: string = API_URL + "/surveys";

  constructor(private readonly http: HttpClient) { }

  public getAllSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.path);
  }

  public getSurveyById(id: number): Observable<Survey> {
    return this.http.get<Survey>(`${this.path}/${id}`);
  }
}
