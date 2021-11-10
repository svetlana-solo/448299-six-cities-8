import OfferCard from '../offer-card/offer-card';
import {Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  onCardFocus?: (offer: number | null) => void,
  isRoomOffersList?: boolean,
}

function OffersList({offers, onCardFocus, isRoomOffersList}: OffersListProps): JSX.Element {

  return (
    <div className={isRoomOffersList ? 'near-places__list places__list' : 'cities__places-list places__list tabs content'}>
      {offers.map((offerCard) => <OfferCard  key={offerCard.id} onCardFocus={onCardFocus} offer={offerCard}/>)}
    </div>
  );
}

export default OffersList;
