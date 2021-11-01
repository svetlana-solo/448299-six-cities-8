import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main-page/main-page';
import Favorites from '../favorites-page/favorites-page';
import Login from '../sign-in/sign-in';
import Room from '../room/room';
import Error from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';


const mapStateToProps = ({offers, reviews}:State) => ({offers, reviews});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({offers, reviews}: PropsFromRedux): JSX.Element {


  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main offers={offers} />
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
          <Room
            reviews={reviews}
            offers={offers}
            neighbours={offers.slice(1,4)}
            authorizationStatus={AuthorizationStatus.Auth}
          />
        </Route>

        <Route>
          <Error />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default connector(App);
export {App};
