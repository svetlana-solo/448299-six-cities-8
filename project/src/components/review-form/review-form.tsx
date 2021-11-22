import {useState, ChangeEvent, FormEvent} from 'react';
import {CommentMessage} from '../../types/offer';
import {RatingToValues} from '../../const';
import {disableReviewForm } from '../../utils/utils';
import {ThunkActionResult} from '../../types/action';
import ReviewRatingItem from '../review-rating-item/review-rating-item';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

type ReviewFormProps = {
  onSubmit: ({comment, rating}: CommentMessage) => ThunkActionResult,
}

function ReviewForm({onSubmit} : ReviewFormProps): JSX.Element {
  const INITIAL_FORM_STATE = {
    'comment': '',
    'rating': 0,
  };

  const [commentMessage, setComment] = useState(INITIAL_FORM_STATE);

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setComment({...commentMessage,[name]: value});
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setComment({...commentMessage,[name]: Number(value)});
  };

  const handleSubmit = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if(commentMessage.rating && commentMessage.comment.length >= MIN_COMMENT_LENGTH){
      disableReviewForm();
      onSubmit(commentMessage);
      setComment(INITIAL_FORM_STATE);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="comment">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingToValues).map(([name, value]) =>(
          <ReviewRatingItem
            key={name}
            name={name}
            value={value}
            currentRating={commentMessage.rating}
            onRatingChange={handleRatingChange}
          />))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={commentMessage.comment} onChange={handleTextChange} required minLength={MIN_COMMENT_LENGTH} maxLength={MAX_COMMENT_LENGTH}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={handleSubmit}
          disabled = {!(commentMessage.comment.length >= MIN_COMMENT_LENGTH && commentMessage.rating)}
        >Submit
        </button>
      </div>
    </form>);
}


export default ReviewForm;
