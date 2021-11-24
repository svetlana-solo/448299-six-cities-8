import {render, screen} from '@testing-library/react';
import SortOptionItem from './sort-option-item';
import {SortOption} from '../../const';

describe('Component: SortOptionItem', () => {

  it('should render correctly with same current sort option', () => {
    const {container} = render(<SortOptionItem sortOptionName={SortOption.Popular} currentSortOption={SortOption.Popular} onSortOptionClick={jest.fn()}/>);

    expect(screen.getByText(SortOption.Popular)).toBeInTheDocument();
    expect(container.querySelector('.places__option')).toBeInTheDocument();
    expect(container.querySelector('.places__option--active')).toBeInTheDocument();

  });

  it('should render correctly with other current sort option', () => {
    const {container} = render(<SortOptionItem sortOptionName={SortOption.Popular} currentSortOption={SortOption.PriceHighToLow} onSortOptionClick={jest.fn()}/>);

    expect(screen.getByText(SortOption.Popular)).toBeInTheDocument();
    expect(container.querySelector('.places__option')).toBeInTheDocument();
    expect(container.querySelector('.places__option--active')).not.toBeInTheDocument();

  });
});
