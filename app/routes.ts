import {Routes} from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from "./events/index"
import {Error404Component} from "./errors/404.component";

export const appRoutes:Routes = <Routes>[
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator], canDeactivate:['canDeactivateCreateEvent']},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren:'app/user/user.module#UserModule'}
]