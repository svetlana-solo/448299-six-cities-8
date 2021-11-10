import { MouseEvent } from 'react';

type SortOptionItemProps = {
  sortOptionName: string,
  currentSortOption: string,
  onSortOptionClick: (sortOption: string) => void,
}

function SortOptionItem ({sortOptionName , currentSortOption, onSortOptionClick}: SortOptionItemProps): JSX.Element {
  const handleSortOptionChange = (evt : MouseEvent<HTMLLIElement>) => {
    if(evt.currentTarget.dataset.name && evt.currentTarget.dataset.name !== currentSortOption){
      onSortOptionClick(evt.currentTarget.dataset.name);
    }
  };

  return (
    <li
      className={`places__option ${sortOptionName === currentSortOption? 'places__option--active':''}`}
      tabIndex={0}
      data-name={sortOptionName}
      onClick={handleSortOptionChange}
    >
      {sortOptionName}
    </li>
  );
}

export default SortOptionItem;
