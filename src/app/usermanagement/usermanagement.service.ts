import { Injectable } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';



@Injectable(

  
)


export class UsermanagementService {

  createdRSVP = new Event;
  constructor() { }

  ngOnInit(): void {

  }


  createRSVP(RSVP: Event) {
    if (RSVP.name != undefined) {
      
    }
  }

}
