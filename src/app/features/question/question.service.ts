import { Injectable } from '@angular/core';
import {API_URL} from '../../envirenment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question, QuestionRequest} from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly path: string = API_URL + "/questions";

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.path);
  }

  public getById(id: string): Observable<Question> {
    return this.http.get<Question>(`${this.path}/${id}`);
  }

  public create(request: QuestionRequest): Observable<Question> {
    return this.http.post<Question>(this.path, request);
  }

  public update(id: string, request: QuestionRequest): Observable<Question> {
    return this.http.put<Question>(`${this.path}/${id}`, request);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.path}/${id}`);
  }

  getByChapterId(chapterId: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.path}/chapter/${chapterId}`);
  }
}
