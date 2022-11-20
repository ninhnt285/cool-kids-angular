import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from "../auth.service";

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
    private authService: AuthService
  ) {

  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(token => {
      console.log(token);
    });
  }
}
