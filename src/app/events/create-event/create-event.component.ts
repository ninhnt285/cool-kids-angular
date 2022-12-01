import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from "@angular/common";
import { empty } from 'rxjs';
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/dynamicdialog";

import { Event } from 'src/app/shared/models/event.model';
import { EventService } from "../event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  is_edit = false;
  createdEvent: Event = {};

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private eventService: EventService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    if (this.config.data != undefined) {
      this.createdEvent = this.config.data;
      this.createdEvent.date = new Date(Date.parse(this.createdEvent.date))
      this.is_edit = true;
    }
  }

  createEvent(event: Event) {
    if (event.date != undefined && event.name != '') {
      let dateString = formatDate(event.date, "yyyy-MM-dd h:mm:ss", this.locale);
      event.date = dateString;

      if (this.is_edit) {
        this.eventService.updateEvent(event);
      } else {
        this.eventService.addEvent(event);
      }

      this.ref.close(event);
    }
  }

  clear() {
    this.createdEvent.name = '';
    this.createdEvent.type = '';
    this.createdEvent.description = '';
  }

}
