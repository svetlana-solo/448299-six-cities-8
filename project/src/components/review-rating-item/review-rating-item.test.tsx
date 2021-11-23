import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewRatingItem from './review-rating-item';
import {RatingToValues} from '../../const';

describe('Component: ReviewRatingItem', () => {
  const fakeHandler = jest.fn();
  const [[mockRatingName, mockRatingValue]] = Object.entries(RatingToValues);
  it('should render correctly with other currentRating', () => {
    const fakeCurrentRating = 7;

    render(<ReviewRatingItem name={mockRatingName} value={mockRatingValue} onRatingChange={fakeHandler} currentRating={fakeCurrentRating}/>);

    expect(screen.getByTestId(mockRatingName)).toBeInTheDocument();
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

  it('should render correctly with same currentRating', () => {
    const fakeCurrentRating = mockRatingValue;

    render(<ReviewRatingItem name={mockRatingName} value={mockRatingValue} onRatingChange={fakeHandler} currentRating={fakeCurrentRating}/>);

    expect(screen.getByTestId(mockRatingName)).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('when user click on input the handler should be executed', () => {
    const fakeCurrentRating = 7;

    render(<ReviewRatingItem name={mockRatingName} value={mockRatingValue} onRatingChange={fakeHandler} currentRating={fakeCurrentRating}/>);

    userEvent.click(screen.getByRole('radio'));

    expect(fakeHandler).toBeCalled();
  });
});
