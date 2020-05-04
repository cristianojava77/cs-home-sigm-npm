import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private baseUrl = 'http://localhost:8080/person';

  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  create(person: Person): Observable<any> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  read(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete/${id}`, null);
  }

}
