import { Injectable } from '@angular/core';
import { Interview } from './interview.model';

@Injectable({providedIn: 'root'})

export class InterviewService {
    interviews: Interview[] = [
        new Interview(
            1,
            new Date(2020, 10, 4),
            'Max Rabid',
            'Martyrdod - wywiad',
            'content tuatj jakis ajdasdasdasdkasdjaksdjaskdjaksdjaksdjkasjda',
            'https://i.ytimg.com/vi/0oq0NWA2gCg/maxresdefault.jpg'
        )
    ];
}

