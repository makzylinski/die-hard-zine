import { Injectable } from '@angular/core';
import { EventReport } from './event-report.model';

@Injectable({providedIn: 'root'})

export class EventReportService {
    eventReports: EventReport[] = [
        new EventReport(
            1,
            new Date(2020, 2, 2),
            'Max Rabid',
            'Ostatni koncert?',
            'kurwakontetntashjasdasjdhasjd',
            'https://d-art.ppstatic.pl/kadry/k/r/d8/73/57c063084d86e_o_full.jpg'
        )
    ];
}
