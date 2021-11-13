
import ReviewItem from '../review-item/review-item';
import {Reviews} from '../../types/offer';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>
      <ul>
        {reviews.map((review) => <ReviewItem review={review} key={review.id} />)}
      </ul>
    </>
  );
}

export default ReviewsList;
