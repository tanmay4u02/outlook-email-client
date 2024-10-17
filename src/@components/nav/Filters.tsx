import React from 'react';
import Container from '@components/layout/Container';
import SelectButton from '@components/buttons/SelectButton';
import filterTypeConstants from '@constants/filterTypeConstants';

const Filters: React.FC<{
  filter: string;
  setFilter: (filter: string) => void;
}> = ({ filter, setFilter }) => {
  return (
    <Container>
      <span className="font-medium text-lg">Filter By:</span>
      <SelectButton
        text="All"
        onClick={() => {
          setFilter(filterTypeConstants.ALL);
        }}
        selected={filter === filterTypeConstants.ALL}
      />
      <SelectButton
        text="Unread"
        onClick={() => {
          setFilter(filterTypeConstants.UNREAD);
        }}
        selected={filter === filterTypeConstants.UNREAD}
      />
      <SelectButton
        text="Read"
        onClick={() => {
          setFilter(filterTypeConstants.READ);
        }}
        selected={filter === filterTypeConstants.READ}
      />
      <SelectButton
        text="Favorites"
        onClick={() => {
          setFilter(filterTypeConstants.FAVORITES);
        }}
        selected={filter === filterTypeConstants.FAVORITES}
      />
    </Container>
  );
};

export default Filters;
