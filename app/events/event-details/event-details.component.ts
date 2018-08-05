import {Component} from '@angular/core';
import {EventService} from "../shared/event.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IEvent, ISession} from "../shared/index";

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container {
            padding-left: 20px;
            padding-right: 20px
        }

        .event-image {
            height: 100px;
        }

        a {
            cursor: pointer;
        }
    `]
})
export class EventDetailsComponent {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        // Set new session Id as the max one + 1
        const nextSessionId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextSessionId + 1;
        this.event.sessions.push(session);
        // Update event in global array of events
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}