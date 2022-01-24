import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wordle } from './model/wordle';

@Injectable({
  providedIn: 'root',
})
export class WordleService {
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<Wordle[]> {
    return this.http.get<Wordle[]>('../../assets/jsonvalues.json');
  }
}
