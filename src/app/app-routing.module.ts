import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SiteHelpComponent } from './sitehelp/sitehelp.component';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  { path: '', redirectTo:'homepage', pathMatch:'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'usermanagement', component: UsermanagementComponent },
  { path: 'help', component: SiteHelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
