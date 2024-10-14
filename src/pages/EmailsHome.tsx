import React from 'react';
import Filters from '@components/nav/Filters';
import EmailList from '@components/emailList';

const EmailsHome = () => {
  return (
    <>
      <Filters />
      <EmailList />
    </>
  );
};

export default EmailsHome;
