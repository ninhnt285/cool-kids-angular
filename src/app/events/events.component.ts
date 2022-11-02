import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateEventComponent } from '../events/create-event/create-event.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DialogService]  
})
export class EventsComponent implements OnInit {
  eventOne = new Event;
  eventTwo = new Event;
  eventThree = new Event;
  eventFour = new Event;
  ref!: DynamicDialogRef;

  eventsArray: Event[] = [];
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
    this.generateEvents()
  }

  generateEvents() {
    this.eventOne.name = 'Halloween Bingo';
    this.eventOne.date = new Date("October 30, 2022");
    this.eventOne.time = new Date();
    this.eventOne.time.setHours(13, 0, 0);
    this.eventOne.type = 'Halloween Bingo';
    this.eventOne.description = 'Halloween Bingo starting at 1pm. Come show us your Halloween costume and play some Bingo.'
    this.eventsArray.push(this.eventOne);

    this.eventTwo.name = "Holiday Poinsettia Sale";
    this.eventTwo.date = new Date("October 31, 2022")
    this.eventTwo.type = "Fundraiser";
    this.eventTwo.description = "Give the gift of the Christmas flower and support the coolest kids fighting cancer during our fundraiser!";
    this.eventsArray.push(this.eventTwo);

  }

  show() {
      this.ref = this.dialogService.open(CreateEventComponent, {
      header: 'Event Creator',
      width: '22%',
      height: '48%'
    });
    this.ref.onClose.subscribe((event: Event) => {
      if (event) {
        this.eventsArray.push(event);
      }
    })
  }

}
