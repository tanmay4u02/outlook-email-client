import React from 'react';
import Container from '@components/layout/Container';
import SelectButton from '@components/buttons/SelectButton';
import filterTypeConstants from '@constants/filterTypeConstants';

const Filters: React.FC<{
  filter: string;
  setFilter: (filter: string) => void;
  readEmails: Set<string>;
  favoriteEmails: Set<string>;
}> = ({ filter, setFilter, readEmails, favoriteEmails }) => {
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
        badgeValue={readEmails?.size}
      />
      <SelectButton
        text="Favorites"
        onClick={() => {
          setFilter(filterTypeConstants.FAVORITES);
        }}
        selected={filter === filterTypeConstants.FAVORITES}
        badgeValue={favoriteEmails?.size}
      />
    </Container>
  );
};

export default Filters;
