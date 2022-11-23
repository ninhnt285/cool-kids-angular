import { Component, OnInit } from '@angular/core';
import { User } from "src/app/shared/models/user.model";
import { UsersService } from "./users.service";
import { MessageService } from "../shared/services/message.service";
import { Table } from 'primeng/table';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  users: User[] = []
  authUser: User = null
  loading: boolean = true

  subscriptionUsers;
  subscriptionAuth;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private messageService: MessageService
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
}
