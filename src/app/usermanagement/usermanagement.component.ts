import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService } from "primeng/dynamicdialog";
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { User } from "src/app/shared/models/user.model";
import { UsersService } from "./users.service";
import { MessageService } from "../shared/services/message.service";
import { AuthService } from "../auth/auth.service";
import { EditUserComponent } from "./edit-user/edit-user.component";

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
  providers: [DialogService]
})
export class UsermanagementComponent implements OnInit {
  ref!: DynamicDialogRef;

  users: User[] = []
  authUser: User = null
  loading: boolean = true

  subscriptionUsers;
  subscriptionAuth;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.subscriptionUsers = this.usersService.users$.subscribe((users) => {
      this.users = users;
    })

    this.subscriptionAuth = this.authService.user$.subscribe((user) => {
      this.authUser = user
    })

    this.usersService.getUsers().subscribe((data) => {
      this.loading = false;
      this.messageService.setSuccess("All users fetched successfully!");
    })
  }

  ngOnDestroy(): void {
    this.subscriptionUsers.unsubscribe()
    this.subscriptionAuth.unsubscribe()
  }

  showEdit(user) {
    const ref = this.dialogService.open(EditUserComponent, {
      data: user,
      header: "Edit User",
      width: '40%',
      height: '50%'
    });
  }
}
