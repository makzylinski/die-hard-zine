import { Injectable } from '@angular/core';
import { News } from './news.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NewsService {
    news: News[] = [
        new News(
        1,
        new Date(1, 10, 2020),
        'Max Rabid',
        'Sobala w areszcie! [Zobacz zdjęcia]',
        'Sobala oszalał!',
        'pornhub.com'),

        new News(
            1,
            new Date(1, 10, 2020),
            'Dark Łukasz',
            'Max ruwniesz oszalał [SZOK]',
            'No poprosu szok dla mnie lol',
            'plicja.pl'
        ),

        new News(
            1,
            new Date(1, 10, 2020),
            'Max Rabid',
            'Sobala w areszcie! [Zobacz zdjęcia]',
            'Sobala oszalał!',
            'pornhub.com'),

        new News(
            1,
            new Date(1, 10, 2020),
            'Max Rabid',
            'Sobala w areszcie! [Zobacz zdjęcia]',
            'Sobala oszalał!',
            'https://pbs.twimg.com/media/D-xnpmRX4AECmKW.jpg'),

        new News(
            1,
            new Date(1, 10, 2020),
            'Max Rabid',
            'Sobala w areszcie! [Zobacz zdjęcia]',
            'Sobala oszalał!',
            'pornhub.com'),
    ];

    singleNews: Subject<News>;

    constructor() {}

    getNewsArray() {
        return this.news.slice();
    }

    showFullNews(news: News) {
        this.singleNews.next(news);
    }
}
