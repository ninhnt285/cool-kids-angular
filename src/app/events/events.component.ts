import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { CreateEventComponent } from '../events/create-event/create-event.component';
import { Event } from 'src/app/shared/models/event.model';
import { EventService } from "./event.service";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DialogService]  
})
export class EventsComponent implements OnInit {
  ref!: DynamicDialogRef;

  events: Event[] = [];

  constructor(
    public dialogService: DialogService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.events$.subscribe(events => {
      this.events = events;
    })

    this.eventService.getEvents();
  }

  show() {
      this.ref = this.dialogService.open(CreateEventComponent, {
      header: 'Event Creator',
      width: '40%',
      height: '60%'
    });
  }
}
