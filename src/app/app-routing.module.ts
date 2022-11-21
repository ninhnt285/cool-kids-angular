import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SiteHelpComponent } from './sitehelp/sitehelp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LogoutComponent } from "./auth/logout/logout.component";


const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', redirectTo:'homepage', pathMatch:'full' },
      // Auth
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'logout', component: LogoutComponent },

      { path: 'homepage', component: HomepageComponent },
      { path: 'events', component: EventsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'usermanagement', component: UsermanagementComponent },
      { path: 'help', component: SiteHelpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
