import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';

@Component({
  selector: 'event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event!: Event;
  constructor() { }

  ngOnInit(): void {

  }

}
