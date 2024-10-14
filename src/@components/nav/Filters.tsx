import React from 'react';
import Container from '@components/layout/Container';
import SelectButton from '@components/buttons/SelectButton';

const Filters: React.FC = () => {
  return (
    <Container>
      <span className="font-medium text-lg">Filter By:</span>
      <SelectButton text="All" onClick={() => {}} />
      <SelectButton text="Unread" onClick={() => {}} selected />
      <SelectButton text="Read" onClick={() => {}} />
      <SelectButton text="Favorites" onClick={() => {}} />
    </Container>
  );
};

export default Filters;
