import Header from '../header/header';
import {loginAction} from '../../store/api-actions';
import {FormEvent, useRef} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, City} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {getRandomInteger} from '../../utils/utils';
import {getAuthorizationStatus} from '../../store/user-status/selectors';
import {setCity} from '../../store/action';

const getRandomCity = (array : City[]): City => array[getRandomInteger(0, array.length - 1)];

function SignIn(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const randomCity = getRandomCity(Object.values(City));

  if(authorizationStatus === AuthorizationStatus.Auth)
  {
    history.push(AppRoute.Main);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      history.push(AppRoute.Main);
    }
  };

  const handleCityClick = () => {
    dispatch(setCity(randomCity));
  };

  return(
    <div className="page page--gray page--login">
      <Header isSignIn />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={loginRef} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" pattern='[A-Za-zА-Яа-яЁё]{1,}[0-9]{1,}' placeholder="Password" ref={passwordRef} required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCityClick}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
