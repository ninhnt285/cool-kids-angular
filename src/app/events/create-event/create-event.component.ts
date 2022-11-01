import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { empty } from 'rxjs';
import { Event } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createdEvent = new Event;
  constructor(public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  createEvent(event: Event) {
    if (event.date != undefined && event.name != '') {
      this.ref.close(event);
    }  
  }

  clear() {
    this.createdEvent.name = '';
    this.createdEvent.type = '';
    this.createdEvent.description = '';
  }

}
