import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer, Review} from '../../types/offer';


export const getReviews = (state: State) : Review[] => state[NameSpace.Room].reviews;

export const getCurrentOffer = (state: State) : Offer | undefined => (
  state[NameSpace.Data].offers.find(({id}) => state[NameSpace.Room].currentOffer === id)
);

export const getNearbyOffers = (state: State) : Offer[] => (
  state[NameSpace.Room].nearbyOffers.reduce<Offer[]>((acc, nearbyOfferId) => {
    const offer = state[NameSpace.Data].offers.find(({id}) => nearbyOfferId === id);
    if (offer) {
      acc.push(offer);
    }
    return acc;
  }, [])
);
