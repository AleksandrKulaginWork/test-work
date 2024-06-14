import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store/store';
import { ReviewsListProps } from './interface';


class ReviewsList extends React.Component<ReviewsListProps> {

  formatName(name: string): string {
    if (!name) return ''; 
    const parts = name.split(' ');
    if (parts.length < 2) {
      return name;
    }
  
    const [lastName, firstName] = parts;
    return `${lastName} ${firstName.charAt(0)}.`;
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <p><strong>{this.formatName(review.name)}</strong></p>
            <p>{review.review}</p>
            <p>{review.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  reviews: state.reviews.reviews,
});

export default connect(mapStateToProps)(ReviewsList);
