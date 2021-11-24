import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import ReviewForm from './review-form';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: NewCommentForm', () => {
  const store = mockStore();
  const fakeHandler = jest.fn();
  const INPUT_COUNT = 5;

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm onSubmit={fakeHandler}/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(container.querySelectorAll('.form__rating-input').length).toBe(INPUT_COUNT);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('when user click on rating star this input should will checked', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm onSubmit={fakeHandler}/>
        </Router>
      </Provider>);

    const [oneStarRating] = container.querySelectorAll('.form__rating-input');
    userEvent.click(oneStarRating);

    expect(oneStarRating).toBeChecked();
  });

  it('when the user has filled out the form and click submit button the handler should be executed', () => {
    const fakeComment = 'just over 50 many-many-many-many-many-many-many-many-many-many symbols comment';
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm onSubmit={fakeHandler}/>
        </Router>
      </Provider>);

    const [oneStarRating] = container.querySelectorAll('.form__rating-input');
    userEvent.click(oneStarRating);
    userEvent.paste(screen.getByRole('textbox'), fakeComment);
    userEvent.click(screen.getByRole('button'));

    expect(fakeHandler).toBeCalled();
  });

  it('when the user has not filled out the form and click submit button the handler should not be executed', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm onSubmit={fakeHandler}/>
        </Router>
      </Provider>);


    userEvent.click(screen.getByRole('button'));

    expect(fakeHandler).not.toBeCalled();
  });
});
