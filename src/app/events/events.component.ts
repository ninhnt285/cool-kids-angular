import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css',]
})
export class EventsComponent implements OnInit {
  eventOne = new Event;
  eventTwo = new Event;
  eventThree = new Event;
  eventFour = new Event;

  eventsArray: Event[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateEvents()
  }

  generateEvents() {
    this.eventOne.name = 'Halloween Bingo';
    this.eventOne.date = new Date();
    this.eventOne.type = 'Halloween Bingo';
    this.eventOne.description = 'Halloween Bingo starting at 1pm. Come show us your Halloween costume and play some Bingo.'
    this.eventsArray.push(this.eventOne);

    this.eventTwo.name = "Holiday Poinsettia Sale";
    this.eventTwo.date = new Date();
    this.eventTwo.type = "Fundraiser";
    this.eventTwo.description = "Give the gift of the Christmas flower and support the coolest kids fighting cancer during our fundraiser!";
    this.eventsArray.push(this.eventTwo);

    this.eventThree.name = "Charity Poker";
    this.eventThree.date = new Date();
    this.eventThree.type = "Poker";
    this.eventThree.description = "Charity poker tournament in honor of Ken Singleton. Half game starts at 5pm. Tournament to start at 7pm.";
    this.eventsArray.push(this.eventThree);

    this.eventFour.name = "Santa Breakfast";
    this.eventFour.date = new Date();
    this.eventFour.type = "Santa";
    this.eventFour.description = "Please join Cool Kids Campaign for our 1st Annual Breakfast with Santa Fundraiser!";
    this.eventsArray.push(this.eventFour);
  }

}
