import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';

interface eventType {
  name: string
  code: string
}
@Component({
  templateUrl: './eventpopup.component.html',
  
})
export class EventPopUp implements OnInit {
  eventType!: eventType [];
  selectedType!: string; 
  eventOne: Event = new Event();

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.eventType = [{ name: 'Beach Party', code: 'BP' }, {name: 'Hallooween', code:'HL'}];
  }

  ngOnInit(): void { }

  selectEvent(event: Event) {
    this.ref.close(event);
    
  }





  

 

}
 


 


