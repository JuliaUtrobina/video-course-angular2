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
    SessionListComponent
} from "./events/index"

import {EventsAppComponent} from "./events-app.components";
import {NavBarComponent} from  "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service"
import {appRoutes} from "./routes";
import {Error404Component} from './errors/404.component'
import {AuthService} from "./user/auth.service";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        Error404Component
    ],
    providers:[
        EventService,
        ToastrService,
        EventListResolver,
        AuthService,
        EventRouteActivator,
        {
            provide:'canDeactivateCreateEvent',
            useValue:checkDirtyState
        }
    ],
    bootstrap:[EventsAppComponent]
})
export class AppModule{}

function checkDirtyState(){
    return false;
}