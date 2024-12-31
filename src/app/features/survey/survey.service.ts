import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey, SurveyRequest } from '../models/survey.model';
import { API_URL } from '../../../envirenment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private readonly path: string = API_URL + "/surveys";

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.path);
  }

  public getById(id: string): Observable<Survey> {
    return this.http.get<Survey>(`${this.path}/${id}`);
  }

  public create(request: SurveyRequest): Observable<Survey> {
    return this.http.post<Survey>(this.path, request);
  }

  public update(id: string, request: SurveyRequest): Observable<Survey> {
    return this.http.put<Survey>(`${this.path}/${id}`, request);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.path}/${id}`);
  }
}
