import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function ErrorPage(): JSX.Element {
  return(
    <div className="error">
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
    </div>

  );
}

export default ErrorPage;
