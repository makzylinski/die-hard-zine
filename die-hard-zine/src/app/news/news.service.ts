import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsService {

    constructor() {}

    test() {
        console.log('tu service');
    }
}
