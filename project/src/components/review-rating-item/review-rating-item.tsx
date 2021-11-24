import { ChangeEvent } from 'react';

type ReviewRatingItemProps = {
  currentRating: number,
  onRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  name: string,
  value: number,
}

function ReviewRatingItem (props : ReviewRatingItemProps): JSX.Element {
  const {currentRating, onRatingChange, name, value} = props;
  const isChecked = currentRating === value;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onRatingChange} checked={isChecked}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={name}>
        <svg className="form__star-image" width="37" height="33" data-testid={name}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingItem;
