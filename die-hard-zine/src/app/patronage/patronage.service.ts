import { Injectable } from '@angular/core';
import { Patronage } from './patronage.model';

@Injectable({providedIn: 'root'})

export class PatronageService {
    patronages: Patronage[] = [
        new Patronage(
            0,
            new Date(2022, 3, 1),
            'Max Rabid',
            'Pierwszy koncert po pandemii',
            'No i kurwa elo',
            'https://www.lepszypoznan.pl/wp-content/uploads/2018/06/9edfk0.jpg'
        )
    ];

    deletePatronage(id: number) {
        this.patronages.splice(id, 1);
    }

    getSinglePatronage(id: number) {
        return this.patronages[id];
    }

    updatePatronage(id: number, editedPatronage: Patronage) {
        this.patronages[id] = editedPatronage;
    }

    addNewPatronage(newPatronage: Patronage) {
        this.patronages.push(newPatronage);
    }
}
