import { Injectable } from '@angular/core';
import {API_URL} from '../../envirenment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly path: string = API_URL + "/questions";

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.path);
  }


}
