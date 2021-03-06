import { Injectable } from '@angular/core';

import { News } from './news.model';
import { Subject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class NewsService {
    news: News[] = [
        new News(
        0,
        new Date(1, 10, 2020),
        'Max Rabid',
        'Chollerka jasna gdzie moje gacie [Zobacz zdjęcia]',
        'asdasdasdasdasd',
        'https://pbs.twimg.com/media/D-xnpmRX4AECmKW.jpg'),
        new News(
        1,
        new Date(1, 10, 2020),
        'Max Rabid',
        'Sobala w areszcie! [Zobacz zdjęcia]',
        'Sobala oszalał!',
        'https://pbs.twimg.com/media/D-xnpmRX4AECmKW.jpg'),

        new News(
        2,
        new Date(1, 10, 2020),
        'Dark Łukasz',
        'Max ruwniesz oszalał [SZOK]',
        'No poprosu szok dla mnie lolNo poprosu szok dla mnie lol',
        'https://pbs.twimg.com/media/D-xnpmRX4AECmKW.jpg'
        ),

        new News(
        3,
        new Date(1, 10, 2020),
        'Max Rabid',
        'Sobala w areszcie! [Zobacz zdjęcia]',
        'Sobala oszalał! asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
        'https://pbs.twimg.com/media/D-xnpmRX4AECmKW.jpg'),

        new News(
        4,
        new Date(1, 10, 2020),
        'Max Rabid',
        'Sobala w areszcie! [Zobacz zdjęcia]',
        'Sobala oszalał!',
        'https://pbs.twimg.com/media/D-xnpmRX4AECmKW.jpg'),

        new News(
        5,
        new Date(1, 10, 2020),
        'Max Rabid',
        'Sobala w areszcie! [Zobacz zdjęcia]',
        'Sobala oszalał!',
        'https://pbs.twimg.com/media/D-xnpmRX4AECmKW.jpg'),
    ];

    singleNews: Subject<News>;

    constructor(private http: HttpClient) {}

    getTest() {
        this.http.get('http://localhost:3000/api/posts').subscribe((data) => {
            console.log(data);
        });
    }

    getNewsArray() {
        return this.news.slice();
    }

    getSingleNews(id: number) {
        return this.news[id];
    }

    deleteNews(id: number) {
        this.news.splice(id, 1);
    }

    updateNews(id: number, editedNews: News) {
        this.news[id] = editedNews;
    }

    addNewNews(news: News) {
        console.log(news);
        this.news.push(news);
        console.log(this.news);
    }
}
