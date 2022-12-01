import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/dynamicdialog";

import { UsersService } from "../users.service";
import { MessageService } from "../../shared/services/message.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  dropdownItems = [
    { name: 'Administrator', code: 1 },
    { name: 'Staff', code: 2 },
    { name: 'Registered User', code: 3 }
  ];
  selectedRole = 3;
  user: User = null;

  constructor(
    private usersService: UsersService,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.selectedRole = this.config.data.role;
    this.user = this.config.data;
  }

  onSubmit(): void {
    this.usersService.updateUser(this.user.id, this.selectedRole)
      .subscribe(() => {
        this.messageService.setSuccess("User updated successfully!")
        this.ref.close();
      });
  }

}
