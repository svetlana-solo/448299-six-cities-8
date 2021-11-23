import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewItem from './review-item';
import {reviews} from '../../utils/mocks';
import dayjs from 'dayjs';

const fakeReview = reviews[0];
describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ReviewItem review={fakeReview}/>
      </Router>,
    );
    expect(screen.getByAltText(/Reviews avatar/i)).toBeInTheDocument();
    expect(screen.getByText(fakeReview.user.name)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(fakeReview.comment)).toBeInTheDocument();
    expect(screen.getByText(dayjs(fakeReview.date).format('MMMM YYYY'))).toBeInTheDocument();

  });
});
