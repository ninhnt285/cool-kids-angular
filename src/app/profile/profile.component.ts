import { Component, OnInit } from '@angular/core';
import { DialogService } from "primeng/dynamicdialog";
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { MessageService } from "../shared/services/message.service";
import { AuthService } from "../auth/auth.service";
import { User } from "src/app/shared/models/user.model";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DialogService]
})
export class ProfileComponent implements OnInit {
  ref!: DynamicDialogRef;
  user: User = null
  subscription;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private dialogService: DialogService
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

  showEdit() {
    const ref = this.dialogService.open(EditProfileComponent, {
      data: this.user,
      header: "Edit User",
      width: '40%',
      height: '50%'
    });
  }
}
