import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';
import { EventService } from "../event.service";
import { AuthService } from "../../auth/auth.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: 'event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  @Input() event!: Event;
  user: User = null
  is_attending = false;
  subscription;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
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
