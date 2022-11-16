import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Event } from 'src/app/shared/models/event.model'

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.local'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer 1|k0rE9amAZyJ0jSkUdO7SdUO0jRWpjdlJTVbXYIJQ'
  })
}

@Injectable()
export class EventsService {
  apiUrl = environment.apiUrl + "/api";
  constructor(
    private http: HttpClient
  ) {}

  /** GET: get array of events from the server */
  getEvents(): Observable<any> {
    const url = `${this.apiUrl}/events/`
    return this.http.get<any>(url);
  }

  /** POST: add event to server */
  addEvent(formData: FormData): Observable<any> {
    const url = `${this.apiUrl}/events/`
    return this.http.post(url, formData, httpOptions);
  }

  /*
  login(): Observable<unknown>{
    const url = `${this.eventsUrl}/login?email=user5%40thebigdev.com&password=123456`;
    return this.http.post(url, httpOptions);
  }
  */
}
