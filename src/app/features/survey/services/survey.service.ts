import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private readonly path = "http://localhost:8080/api/v1/surveys"
  constructor(private http: HttpClient) { }

  public getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.path);
  }
}
