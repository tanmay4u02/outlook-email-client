import React, { useEffect, useState } from 'react';
import Filters from '@components/nav/Filters';
import EmailList from '@components/emailList';
import getEmails from '@api/email/getEmails';

const EmailsHome = () => {
  const [emailList, setEmailList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      <Filters />
      <EmailList emailList={emailList} isLoading={isLoading} />
    </>
  );
};

export default EmailsHome;
