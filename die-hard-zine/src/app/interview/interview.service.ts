import { Injectable } from '@angular/core';
import { Interview } from './interview.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class InterviewService {

    interviews: Interview[] = [
        new Interview(
            0,
            new Date(2020, 10, 4),
            'Max Rabid',
            'Martyrdod - wywiad',
            'content tuatj jakis ',
            'https://i.ytimg.com/vi/0oq0NWA2gCg/maxresdefault.jpg'
        ),

        new Interview(
            1,
            new Date(2020, 10, 5),
            'Dark Sobala',
            'Cancerfaust - wywiad z Kornelem',
            'No siema jestem korni heh xd kurwa nie wiem no na basidle gram',
            'https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/12083531_fb_1465558371.0468_funds.jpg'
        )
    ];

    getAllInterviews() {
        return this.interviews.slice();
    }

    deleteInterview(id: number) {
        this.interviews.splice(id, 1);
    }

    getInterview(id: number) {
        return this.interviews[id];
    }

    updateInterview(id: number, editedInterview: Interview) {
        this.interviews[id] = editedInterview;
    }

    addNewInterview(interview: Interview) {
        this.interviews.push(interview);
    }
}

