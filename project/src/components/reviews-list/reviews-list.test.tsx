import {render, screen} from '@testing-library/react';
import {reviews} from '../../utils/mocks';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const {container} = render(<ReviewsList reviews={reviews}/>);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(container.querySelector('.reviews__list')).toBeInTheDocument();
  });
});
