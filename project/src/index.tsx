import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offersMock} from './mocks/offers-mock';
import {reviewsMock} from './mocks/reviews-mock';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offersMock}
      reviews={reviewsMock}
    />
  </React.StrictMode>,
  document.getElementById('root'));
