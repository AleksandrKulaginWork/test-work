import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/store';
import { setPage } from 'store/slice';
import { ReviewsListProps } from './interface';
import Pagination from '../Pagination/index';


class ReviewsList extends Component<ReviewsListProps> {
  reviewsPerPage = 10;

  formatName(name: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    const [lastName, firstName] = parts;
    return `${lastName} ${firstName.charAt(0)}.`;
  }

  render() {
    const { reviews, currentPage, setPage } = this.props;

    const indexOfLastReview = currentPage * this.reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - this.reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(reviews.length / this.reviewsPerPage);

    return (
      <div>
        {currentReviews.map((review, index) => (
          <div key={index}>
            <p><strong>{this.formatName(review.name)}</strong></p>
            <p>{review.review}</p>
            <p>{review.date}</p>
          </div>
        ))}

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setPage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  reviews: state.reviews.reviews,
  currentPage: state.reviews.currentPage,
});

const mapDispatchToProps = {
  setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
