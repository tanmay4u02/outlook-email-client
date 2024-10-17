import React, { useEffect, useState } from 'react';
import Filters from '@components/nav/Filters';
import EmailList from '@components/emailList';
import getEmails from '@api/email/getEmails';
import filterTypeConstants from '@constants/filterTypeConstants';

const EmailsHome = () => {
  const [emailList, setEmailList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [filter, setFilter] = useState(filterTypeConstants.ALL);

  useEffect(() => {
    setIsLoading(true);

    getEmails()
      .then((data) => {
        if (data) {
          setEmailList(data.list);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Filters filter={filter} setFilter={setFilter} />
      <EmailList emailList={emailList} isLoading={isLoading} filter={filter} />
    </>
  );
};

export default EmailsHome;
