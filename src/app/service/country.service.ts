import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CountryService {

  private base_url = environment.api_url + '/country';

  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    return this.http.get(`${this.base_url}`);
  }

  read(id: number): Observable<any> {
    return this.http.get(`${this.base_url}/${id}`);
  }

}
