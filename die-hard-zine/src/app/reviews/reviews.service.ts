import { Injectable } from '@angular/core';
import { Review } from './reviews.model';

@Injectable({providedIn: 'root'})

export class ReviewsService {
    reviews: Review[] = [
        new Review(
            0,
            new Date(2020, 6, 6),
            'Dark Sobala',
            'Recenzja 1. - Malina Road1',
            'asdasdasdasdasdacontentasdasdasdasdasd',
            'https://i.ytimg.com/vi/BJGDmGZjXxk/hqdefault.jpg'
        ),
        new Review(
            1,
            new Date(2020, 6, 6),
            'Dark Sobala',
            'Recenzja 1. - Malina Road2',
            'asdasdasdasdasdacontentasdasdasdasdasd',
            'https://i.ytimg.com/vi/BJGDmGZjXxk/hqdefault.jpg'
        ),
        new Review(
            2,
            new Date(2020, 6, 6),
            'Dark Sobala',
            'Recenzja 1. - Malina Road3',
            'asdasdasdasdasdacontentasdasdasdasdasd',
            'https://i.ytimg.com/vi/BJGDmGZjXxk/hqdefault.jpg'
        )
    ];

    deleteReview(id: number) {
        this.reviews.splice(id, 1);
    }

    getSingleReview(id: number) {
        return this.reviews[id];
    }

    updateReview(id: number, updatedReview: Review) {
        this.reviews[id] = updatedReview;
    }

    addNewReview(newReview: Review) {
        this.reviews.push(newReview);
    }
}

