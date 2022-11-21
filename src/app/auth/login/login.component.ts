import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { MessageService } from "../../shared/services/message.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email!: string;
  password!: string;

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.authService.user && this.authService.user.id) {
        this.router.navigate(["/"]);
      }
    }, 1000);
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      data => {
        this.router.navigate(["/"]);
      },
      err => {
        this.messageService.update({severity:'error', summary:'Error', detail: err.error.message ?? "Unknown Error!"})
      }
    );
  }
}
