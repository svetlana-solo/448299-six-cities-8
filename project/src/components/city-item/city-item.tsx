import {MouseEvent} from 'react';

type CityItemProps = {
  city: string,
  currentCity: string,
  onCityClick: (currentCity: string) => void,
}

function CityItem ({city, currentCity, onCityClick}: CityItemProps): JSX.Element {
  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    if(evt.currentTarget.dataset.name && evt.currentTarget.dataset.name !== currentCity){
      onCityClick(evt.currentTarget.dataset.name);
    }
  };
  return (
    <li className="locations__item">
      <a className={`${currentCity === city? 'tabs__item--active': ''} locations__item-link tabs__item`} data-name={city} href="main.html" onClick={handleCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityItem;
