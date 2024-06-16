import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/store';
import styles from './style.module.css';
import Pagination from 'components/Pagination';
import { ReviewsListProps, ReviewsListState } from './interface';


class ReviewsList extends Component<ReviewsListProps, ReviewsListState> {
    constructor(props: ReviewsListProps) {
        super(props);
        this.state = {
            currentPage: 1,
            reviewsPerPage: 10,
        };
    }

    handlePageChange = (page: number) => {
        this.setState({ currentPage: page });
    };

    formatName(name: string): string {
        if (!name) return '';
        const [lastName, firstName] = name.split(' ');
        if (!firstName) return lastName;
        return `${lastName} ${firstName.charAt(0)}.`;
    }

    render() {
        const { reviews } = this.props;
        const { currentPage, reviewsPerPage } = this.state;

        const indexOfLastReview = currentPage * reviewsPerPage;
        const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
        const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

        return (
            <div className={styles.reviewsList}>
                <ul>
                    {currentReviews.map((review, index) => (
                        <li key={index}>
                            <div className={styles.listBlock}>
                                <p className={styles.clientName}>{this.formatName(review.name)}</p>
                                <p>{review.review}</p>
                            </div>
                            <p>{review.date}</p>
                        </li>
                    ))}
                </ul>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(reviews.length / reviewsPerPage)}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    reviews: state.reviews.reviews,
});

export default connect(mapStateToProps)(ReviewsList);
