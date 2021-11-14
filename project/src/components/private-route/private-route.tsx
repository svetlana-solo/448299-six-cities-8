import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {getAuthorizationStatus} from '../../store/user-status/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

const mapStateToProps = (state : State) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;


function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);
