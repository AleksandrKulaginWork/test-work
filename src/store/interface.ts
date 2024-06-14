export interface Review {
    name: string;
    review: string;
    date: string;
}

export enum Language {
    Russian = 'ru',
    English = 'en',
}

export interface ReviewsState {
    language: Language;
    reviews: Review[];
}