import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { DialogService } from 'primeng/dynamicdialog';
import { EventPopUp } from '../events/Event Popup/eventpopup.component';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DialogService]
})
export class EventsComponent implements OnInit {
  eventDate : Date = new Date(); 

  eventOne: Event = new Event();

  eventArray: Event[] = [];

  value = '';

  messageService: any;

  

  constructor(public dialog: DialogService) { }

  ngOnInit(): void {
    this.eventOne.eventName = "Party";
    this.eventOne.eventDate = new Date();
    this.eventOne.eventDescription = "Come to the party";
  }

  test() {
    console.log(this.eventOne);
  };

  show() {
    const ref = this.dialog.open(EventPopUp, {

      header: 'Create Event',
      width: '50%'
    });

    ref.onClose.subscribe((event: Event) => {
      if (event) {
        this.messageService.add({});

        
      }



  
    });
  }



  

}
