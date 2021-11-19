import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Offer} from '../../types/offer';
import {City, CityLocation} from '../../const';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer?: number | null;
  isRoomMap?: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer, isRoomMap} = props;
  const cityLocation = CityLocation[city];

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      map.flyTo([cityLocation.latitude, cityLocation.longitude],cityLocation.zoom);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        //eslint-disable-next-line no-console
        console.log(offer, selectedOffer);
        marker
          .setIcon(
            selectedOffer !== null && offer.id === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [cityLocation, map, offers, selectedOffer]);

  return <section className={isRoomMap ? 'property__map map' : 'cities__map map'} style={{height: '100%'}} ref={mapRef}/>;
}

export default Map;
