import Logo from '../logo/logo';

function ErrorPage(): JSX.Element {
  return(
    <div className="error">
      <h1>404 Not Found</h1>
      <Logo />
    </div>

  );
}

export default ErrorPage;
