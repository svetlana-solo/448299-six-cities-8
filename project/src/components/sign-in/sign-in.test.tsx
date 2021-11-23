import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../const';
import SignIn from './sign-in';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: SignIn', () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.Auth},
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
