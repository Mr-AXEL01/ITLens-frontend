import { Injectable } from '@angular/core';
import {API_URL} from '../../envirenment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chapter} from './chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private readonly path: string = API_URL + "/chapters";

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.path);
  }

  public getById(id: string): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.path}/${id}`);
  }
}
