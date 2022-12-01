import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { MessageService } from "../../shared/services/message.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  email!: string;
  name!: string;
  password!: string;
  c_password!: string;
  errorArr = {
    email: [],
    name: [],
    password: [],
    c_password: []
  }

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {

  }

  onSubmit() {
    let userData = {
      email: this.email,
      name: this.name,
      password: this.password,
      c_password: this.c_password
    }

    this.authService.register(userData).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/"]);
      },
      err => {
        this.errorArr = err.error.data;
        this.messageService.update({severity:'error', summary:'Error', detail: err.error.message ?? "Unknown Error!"})
      }
    );
  }
}
