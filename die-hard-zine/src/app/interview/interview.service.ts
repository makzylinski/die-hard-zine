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
            'content tuatj jakis ajdasdasdasdkasdjaksdjaskdjaksdjaksdjkasjda',
            'https://i.ytimg.com/vi/0oq0NWA2gCg/maxresdefault.jpg'
        )
    ];

    deleteInterview(id: number) {
        this.interviews.splice(id, 1);
    }

    getInterview(id: number) {
        return this.interviews[id];
    }

    updateInterview(id: number, editedInterview: Interview) {
        this.interviews[id] = editedInterview;
    }
}

