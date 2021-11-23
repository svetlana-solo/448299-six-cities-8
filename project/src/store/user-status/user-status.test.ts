import {userStatus} from './user-status';
import {AuthorizationStatus} from '../../const';
import {requireAuthorization, requireLogout, setUserEmail} from '../action';

describe('Reducer: userStatus', () => {
  it('without additional parameters should return initial state', () => {
    expect(userStatus(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        userEmail: '',
      });
  });

  it('should update authorization status by a given status', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userEmail: '',
    };
    expect(userStatus(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: '',
      });
  });

  it('should update authorization status for No authorization', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: '',
    };
    expect(userStatus(state, requireLogout()))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userEmail: '',
      });
  });

  it('should update user email', () => {
    const fakeEmail = 'fake@mail.ru';
    const state = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: '',
    };
    expect(userStatus(state, setUserEmail(fakeEmail)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: fakeEmail,
      });
  });
});
