import { Component, OnInit, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

import { Event } from 'src/app/shared/models/event.model';
import { EventService } from "../event.service";
import { AuthService } from "../../auth/auth.service";
import { User } from "src/app/shared/models/user.model";
import { CreateEventComponent } from "../create-event/create-event.component";

@Component({
  selector: 'event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css'],
  providers: [DialogService]
})
export class EventDisplayComponent implements OnInit {
  ref!: DynamicDialogRef;
  @Input() event!: Event;
  user: User = null
  is_attending = false;
  subscription;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(user => {
      this.user = user;
      if (this.user != null) {
        this.is_attending = this.event.users?.find(user => user.id == this.user.id) !== undefined;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditEvent(event) {
    const ref = this.dialogService.open(CreateEventComponent, {
      data: event,
      header: "Edit Event",
      width: '40%',
      height: '50%'
    });
  }

  onDeleteEvent(id) {
    this.eventService.deleteEvent(id);
  }

  onAttendEvent(id) {
    this.eventService.attendEvent(id).subscribe(() => {});
  }

  onUnAttendEvent(id) {
    this.eventService.unAttendEvent(id).subscribe(() => {});
  }
}
