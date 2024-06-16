import { Review } from "store/interface";

export interface ReviewsListProps {
    reviews: Review[];
    currentPage: number;
    setPage: (page: number) => void;
}