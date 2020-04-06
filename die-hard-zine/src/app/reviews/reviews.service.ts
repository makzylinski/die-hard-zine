import { Injectable } from '@angular/core';
import { Review } from './reviews.model';

@Injectable({providedIn: 'root'})

export class ReviewsService {
    reviews: Review[] = [
        new Review(
            1,
            new Date(2020, 6, 6),
            'Dark Sobala',
            'Recenzja 1. - Malina Road',
            'asdasdasdasdasdacontentasdasdasdasdasd',
            'https://i.ytimg.com/vi/BJGDmGZjXxk/hqdefault.jpg'
        )
    ];
}

