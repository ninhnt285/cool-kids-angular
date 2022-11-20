import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { AuthService } from "./auth/auth.service";
import { ApiService } from "./shared/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'CoolKidsConnect';
  visibleSidebar1 = false;
  items!: MenuItem[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    // Load token
    let token = localStorage.getItem("token") ?? "";
    this.apiService.updateToken(token);
    // Load current user
    this.authService.getMe();
  }

}
