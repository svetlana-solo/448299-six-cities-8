import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <Link to={AppRoute.SignIn} className='header__nav-link header__nav-link--profile'>
                  <div className='header__avatar-wrapper user__avatar-wrapper'/>
                  <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                </Link>
              </li>
              <li className='header__nav-item'>
                <a className='header__nav-link' href='#temp'>
                  <span className='header__signout'>Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
