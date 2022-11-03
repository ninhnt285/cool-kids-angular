//CORE ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//PRIMENG
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { InputTextareaModule } from 'primeng/inputtextarea';
//COMPONENTS
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SiteHelpComponent } from './sitehelp/sitehelp.component';
import { MessagePopupComponent } from './message-popup/message-popup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventDisplayComponent } from './events/event-display/event-display.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    ProfileComponent,
    UsermanagementComponent,
    SiteHelpComponent,
    HomepageComponent,
    MessagePopupComponent,
    EventDisplayComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    SidebarModule,
    DynamicDialogModule,
    ToolbarModule,
    TooltipModule,
    DividerModule,
    MenuModule,
    MessageModule,
    MessagesModule,
    CardModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
