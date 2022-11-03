import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from "./message.service";
import { Event } from "src/app/shared/models/event.model";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private eventsUrl = 'api/events';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<any>(environment.apiUrl + this.eventsUrl).pipe(
      map(res => {
        return res.data.map(item => {
          let event = new Event();
          event.id = item.id;
          event.name = item.name;
          event.type = item.type;
          event.date = item.date;
          event.time = item.time;
          event.description = item.description;
          return event;
        });
      })
    );
  }
}
