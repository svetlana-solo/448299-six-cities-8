import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main-page/main-page';
import Favorites from '../favorites-page/favorites-page';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import Error from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import Loading from '../loading/loading';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user-status/selectors';
import {getLoadedDataStatus} from '../../store/data-offers/selectors';
import {useSelector} from 'react-redux';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if(!isDataLoaded || isCheckedAuth(authorizationStatus)){
    return <Loading />;
  }

  return  (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>

        <Route exact path={AppRoute.SignIn}>
          render={() => <SignIn />}
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
        >
        </PrivateRoute>

        <Route exact path={`${AppRoute.Room}/:id`}>
          <Room/>
        </Route>

        <Route path={AppRoute.Error}>
          <Error />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

