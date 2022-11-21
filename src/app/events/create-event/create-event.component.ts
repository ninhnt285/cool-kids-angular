import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from "@angular/common";
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { empty } from 'rxjs';
import { Event } from 'src/app/shared/models/event.model';
import { EventService } from "../event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createdEvent: Event = {};
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    public ref: DynamicDialogRef,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
  }

  createEvent(event: Event) {
    if (event.date != undefined && event.name != '') {
      let dateString = formatDate(event.date, "yyyy-MM-dd h:mm:ss", this.locale);
      event.date = dateString;
      this.eventService.addEvent(event);

      this.ref.close(event);
    }
  }

  clear() {
    this.createdEvent.name = '';
    this.createdEvent.type = '';
    this.createdEvent.description = '';
  }

}
