import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

import {AppScreenProps} from './app-types';

import Main from '../main-page/main-page';
import Favorites from '../favorites-page/favorites-page';
import Login from '../sign-in/sign-in';
import Room from '../room/room';
import Error from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';

function App(props: AppScreenProps): JSX.Element {
  const offersCount = props.offersCount;
  const offers = props.offers;
  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main offersCount={offersCount} offers={offers} />
        </Route>

        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>

        <Route exact path={`${AppRoute.Room}/:id`}>
          <Room />
        </Route>

        <Route>
          <Error />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
