
import ReviewItem from '../review-item/review-item';
import {Reviews} from '../../types/offer';
import {sortDate} from '../../utils/utils';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const MAX_REVIEWS_COUNT = 10;
  const comments = reviews.length > MAX_REVIEWS_COUNT
    ? [...reviews].sort(sortDate).slice(0, MAX_REVIEWS_COUNT)
    : [...reviews].sort(sortDate);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments?.length}</span></h2>
      <ul>
        {comments.map((review) => <ReviewItem review={review} key={review.id} />)}
      </ul>
    </>
  );
}

export default ReviewsList;
