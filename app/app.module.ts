import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from "./events/index"

import {EventsAppComponent} from "./events-app.components";
import {NavBarComponent} from  "./nav/navbar.component";
import {TOASTR_TOKEN, Toastr} from "./common/toastr.service"
import {CollapsibleWellComponent} from "./common/collapsible-well.component"
import {appRoutes} from "./routes";
import {Error404Component} from './errors/404.component'
import {AuthService} from "./user/auth.service";

// As a type use Toastr interface.
declare let toastr:Toastr;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        Error404Component,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [
        EventService,
        {
            // If you try to get by token TOASTR_TOKEN Angular will give toastr object
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        EventListResolver,
        AuthService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}

function checkDirtyState() {
    return false;
}