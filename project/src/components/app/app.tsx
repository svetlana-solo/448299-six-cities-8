import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main-page/main-page';
import Favorites from '../favorites-page/favorites-page';
import Login from '../sign-in/sign-in';
import Room from '../room/room';
import Error from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main offersCount={offersCount} />
        </Route>

        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
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
