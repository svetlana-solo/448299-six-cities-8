import {SortOption} from '../../const';
import {setCurrentSortOption} from '../../store/action';
import SortOptionItem from '../sort-option-item/sort-option-item';
import {getCurrentSortOption} from '../../store/main-page/selectors';
import {useDispatch, useSelector} from 'react-redux';

function Sort (): JSX.Element {
  const currentSortOption = useSelector(getCurrentSortOption);
  const dispatch = useDispatch();

  const handleSortOption = (sortOption: string) => {
    dispatch(setCurrentSortOption(sortOption));
  };

  const handleSortListClick = () => {
    const sortOptionsElement = document.querySelector('.places__options--custom');

    if(sortOptionsElement){
      sortOptionsElement.classList.toggle('places__options--opened');
      sortOptionsElement.classList.toggle('places__options--closed');
    }
  };

  const handleSortOptionChange = (sortOption: string) => {
    handleSortListClick();
    handleSortOption(sortOption);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListClick}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--closed">
        {
          Object
            .values(SortOption)
            .map((sortOption) => <SortOptionItem key={sortOption} sortOptionName={sortOption} currentSortOption={currentSortOption} onSortOptionClick={handleSortOptionChange}/>)
        }
      </ul>
    </form>
  );
}

export default Sort;
