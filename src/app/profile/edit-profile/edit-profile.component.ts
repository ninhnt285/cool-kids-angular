import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/dynamicdialog";

import { AuthService } from "../../auth/auth.service";
import { MessageService } from "../../shared/services/message.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user: User = null

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.user = this.config.data;
  }

  onSubmit(): void {
    this.authService.updateMe({name: this.user?.name})
      .subscribe(() => {
        this.messageService.setSuccess("User updated successfully!")
        this.ref.close();
      });
  }
}
