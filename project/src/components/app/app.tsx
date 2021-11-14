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
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-status/selectors';
import {getOffers, getLoadedDataStatus} from '../../store/data-offers/selectors';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const mapStateToProps = (state : State) => ({
  offers: getOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getLoadedDataStatus(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({offers, authorizationStatus, isDataLoaded}: PropsFromRedux): JSX.Element {
  if(!isDataLoaded || isCheckedAuth(authorizationStatus)){
    return <Loading />;
  }

  return  (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main offers={offers} />
        </Route>

        <Route exact path={AppRoute.SignIn}>
          render={() => <SignIn />}
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
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

export default connector(App);
export {App};
