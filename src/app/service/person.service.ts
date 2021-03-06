import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private base_url = environment.api_url + '/person';

  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    return this.http.get(`${this.base_url}`);
  }

  create(person: Person): Observable<any> {
    return this.http.post(`${this.base_url}`, person);
  }

  update(person: Person): Observable<any> {
    return this.http.post(`${this.base_url}`, person);
  }

  read(id: number): Observable<any> {
    return this.http.get(`${this.base_url}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.post(`${this.base_url}/delete/${id}`, null);
  }

}
