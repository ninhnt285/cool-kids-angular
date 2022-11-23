import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Event } from 'src/app/shared/models/event.model';
import { EventService } from "../event.service";
import { AuthService } from "../../auth/auth.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  user: User = null
  event: Event = null

  is_attending = false;
  subscription;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      let event_id = paramMap.get('id');
      this.getEvent(event_id)
    })

    this.subscription = this.authService.user$.subscribe(user => {
      this.user = user;
      this.checkAttend()
    })
  }

  checkAttend() {
    if (this.user != null && this.event != null) {
      this.is_attending = this.event.users?.find(user => user.id == this.user.id) !== undefined;
    }
  }

  getEvent(id) {
    this.eventService.getEvent(id)
      .subscribe(event => {
        this.event = event;
        this.checkAttend();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDeleteEvent(id) {
    this.eventService.deleteEvent(id);
    this.router.navigate(["events"]);
  }

  onAttendEvent(id) {
    this.eventService.attendEvent(id).subscribe(() => {
      this.getEvent(id);
    });
  }

  onUnAttendEvent(id) {
    this.eventService.unAttendEvent(id).subscribe(() => {
      this.getEvent(id);
    });
  }
}
