import {Injectable} from '@angular/core';
import {IEvent, ISession} from '../shared/event.model';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class VoterService {
    constructor(private http: Http) {

    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);

        const ulr = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.delete(ulr).catch(this.handleError).subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        const ulr = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.post(ulr, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
