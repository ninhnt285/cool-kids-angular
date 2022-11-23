import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { Event } from "src/app/shared/models/event.model";
import { MessageService } from "../shared/services/message.service";
import { ApiService } from "../shared/services/api.service";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private _events = new BehaviorSubject<Event[]>([]);
  readonly events$ = this._events.asObservable();

  private events: Event[] = [];

  constructor(
    private messageService: MessageService,
    private apiService: ApiService,
    private authService: AuthService,
  ) { }

  getEvents() {
    this.apiService.get("events")
      .subscribe(res => {
        this.events = res.data;
        this._events.next(res.data);
      })
  }

  addEvent(event) {
    this.apiService.post("events", event)
      .subscribe(res => {
        this.events.push(res.data);
        this._events.next(this.events);
        this.messageService.update({severity:'success', summary:'Success', detail:'Added Event Successfully!'})
      })
  }

  updateEvent(event) {
    this.apiService.put("events/" + event.id, event)
      .subscribe(res => {
        this.getEvents()
        this.authService.getMe();
        this.messageService.update({severity:'success', summary:'Success', detail:'Updated Event Successfully!'})
      })
  }

  deleteEvent(id) {
    this.apiService.delete("events/" + id)
      .subscribe(res => {
        this.getEvents()
        this.authService.getMe();
        this.messageService.update({severity:'success', summary:'Success', detail:'Deleted Event Successfully!'})
      })
  }

  attendEvent(id) {
    return this.apiService.post("attend-event/" + id, {})
      .pipe(map(res => {
        this.getEvents();
        this.authService.getMe();
      }));
  }

  unAttendEvent(id) {
    return this.apiService.post("unattend-event/" + id, {})
      .pipe(map(res => {
        this.getEvents();
        this.authService.getMe();
      }));
  }
}
