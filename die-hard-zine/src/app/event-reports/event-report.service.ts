import { Injectable } from '@angular/core';
import { EventReport } from './event-report.model';

@Injectable({providedIn: 'root'})

export class EventReportService {
    eventReports: EventReport[] = [
        new EventReport(
            0,
            new Date(2020, 2, 2),
            'Max Rabid',
            'Ostatni koncert?',
            'kurwakontetntashjasdasjdhasjd',
            'https://d-art.ppstatic.pl/kadry/k/r/d8/73/57c063084d86e_o_full.jpg'
        )
    ];

    deleteReport(id: number) {
        this.eventReports.splice(id, 1);
    }

    getEventReport(id: number) {
        return this.eventReports[id];
    }

    updateEventReport(id: number, updatedEventReport: EventReport) {
        this.eventReports[id] = updatedEventReport;
    }

    addNewEventReport(newEventReport: EventReport) {
        this.eventReports.push(newEventReport);
    }
}
