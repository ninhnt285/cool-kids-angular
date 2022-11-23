import { Component, OnInit } from '@angular/core';
import { MessageService } from "../shared/services/message.service";
import { AuthService } from "../auth/auth.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = null
  subscription;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(user => {
      this.user = user
    })
  }

  onSubmit(): void {
    this.messageService.update({severity:'success', summary:'Success', detail:'Profile Updated Successfully!'})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showEdit(user) {
    
  }

}
