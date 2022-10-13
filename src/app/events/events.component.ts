import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model'; 


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventDate : Date = new Date(); 

  eventOne: Event = new Event();

  eventArray: Event[] = [];

  constructor() { }

  ngOnInit(): void {
    this.eventOne.eventName = "Party";
    this.eventOne.eventDate = new Date();
    this.eventOne.eventDescription = "Come to the party";
  }

  test() {
    console.log(this.eventOne);
  };

}
