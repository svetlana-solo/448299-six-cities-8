import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const getAuthorizationStatus = (state: State) : AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export {getAuthorizationStatus};
