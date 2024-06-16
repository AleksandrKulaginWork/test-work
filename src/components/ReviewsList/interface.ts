import { Review } from "store/interface";


export interface ReviewsListProps {
    reviews: Review[];
}

export interface ReviewsListState {
    currentPage: number;
    reviewsPerPage: number;
}