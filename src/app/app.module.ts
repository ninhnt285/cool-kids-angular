import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SiteHelpComponent } from './sitehelp/sitehelp.component';

@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    ProfileComponent,
    UsermanagementComponent,
    SiteHelpComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    CalendarModule,
    AppRoutingModule,
    SidebarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
