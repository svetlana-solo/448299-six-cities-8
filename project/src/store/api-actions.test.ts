import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, fetchOffersAction, fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchCommentsAction, changeFavoriteStatus, fetchNearbyOffersAction, addReviewAction} from './api-actions';
import {APIRoute, AuthorizationStatus} from '../const';
import {State} from '../types/state';
import {requireAuthorization, setOffers, setFavoriteOffers, setCurrentOffer, setReviews, setNearbyOffers, updateFavoriteOffers, updateOffers} from './action';
import {offers, offerWithFavoriteStatus, reviews} from '../utils/mocks';
import {adaptOfferToServer, adaptReviewToServer} from '../utils/utils';
import {CommentMessage} from '../types/offer';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const onFakeNotFound = jest.fn();
  const api = createAPI(onFakeUnauthorized(),onFakeNotFound());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
    ]);
  });

  it('should dispatch setOffers when GET /hotels', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, offers.map((offer) => adaptOfferToServer(offer)));

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      setOffers(offers),
    ]);
  });

  it('should dispatch setFavoriteOffers when GET /favorite', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, offers.map((offer) => adaptOfferToServer(offer)));

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchFavoriteOffersAction());

    expect(store.getActions()).toEqual([
      setFavoriteOffers(offers),
    ]);
  });

  it('should dispatch setCurrentOffer when GET /hotels/{room_id}', async () => {
    const store = mockStore();
    const ROOM_ID = 1;

    mockAPI
      .onGet(`${APIRoute.Offers}/${ROOM_ID}`)
      .reply(200, adaptOfferToServer(offerWithFavoriteStatus));

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchCurrentOfferAction(ROOM_ID));

    expect(store.getActions()).toEqual([
      setCurrentOffer(offerWithFavoriteStatus),
    ]);
  });

  it('should dispatch setComments when GET /comments/{room_id}', async () => {
    const store = mockStore();
    const ROOM_ID = 1;

    mockAPI
      .onGet(`${APIRoute.Comments}/${ROOM_ID}`)
      .reply(200, reviews.map((review) => adaptReviewToServer(review)));

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchCommentsAction(ROOM_ID));

    expect(store.getActions()).toEqual([
      setReviews(reviews),
    ]);
  });

  it('should dispatch setNearbyOffers when GET /hotels/{room_id}/nearby', async () => {
    const store = mockStore();
    const ROOM_ID = 1;

    mockAPI
      .onGet(`${APIRoute.Offers}/${ROOM_ID}${APIRoute.Nearby}`)
      .reply(200, offers.map((offer) => adaptOfferToServer(offer)));

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchNearbyOffersAction(ROOM_ID));

    expect(store.getActions()).toEqual([
      setNearbyOffers(offers),
    ]);
  });

  it('should dispatch setReviews when POST /comments/{room_id}', async () => {
    const store = mockStore();
    const ROOM_ID = 1;
    const fakeComment : CommentMessage = {comment : 'good', rating : 4};

    mockAPI
      .onPost(`${APIRoute.Comments}/${ROOM_ID}`)
      .reply(200, reviews.map((review) => adaptReviewToServer(review)));

    expect(store.getActions()).toEqual([]);

    await store.dispatch(addReviewAction(fakeComment, ROOM_ID));

    expect(store.getActions()).toEqual([
      setReviews(reviews),
    ]);
  });

  it('should dispatch updateOffers and updateFavoriteOffers when POST /favorite/{room_id}/{favorite_status}', async () => {
    const store = mockStore();
    const ROOM_ID = 1;
    const FAVORITE_STATUS = 1;

    mockAPI
      .onPost(`${APIRoute.Favorite}/${ROOM_ID}/${FAVORITE_STATUS}`)
      .reply(200, adaptOfferToServer(offerWithFavoriteStatus));

    expect(store.getActions()).toEqual([]);

    await store.dispatch(changeFavoriteStatus(ROOM_ID, FAVORITE_STATUS));

    expect(store.getActions()).toEqual([
      updateOffers(offerWithFavoriteStatus),
      updateFavoriteOffers(offerWithFavoriteStatus),
    ]);
  });
});
