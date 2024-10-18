import React, { useEffect, useRef, useState } from 'react';
import Filters from '@components/nav/Filters';
import EmailList from '@components/emailList';
import getEmails from '@api/email/getEmails';
import filterTypeConstants from '@constants/filterTypeConstants';

const EmailsHome = () => {
  const [emailList, setEmailList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(filterTypeConstants.ALL);
  const [pageNo, setPageNo] = useState(1);

  const [readEmails, setReadEmails] = useState(new Set<string>(JSON.parse(localStorage.getItem('readEmails') ?? '[]')));
  const [favoriteEmails, setFavoriteEmails] = useState(
    new Set<string>(JSON.parse(localStorage.getItem('favoriteEmails') ?? '[]'))
  );

  const totalPages = useRef(0);

  useEffect(() => {
    setIsLoading(true);

    (filter === filterTypeConstants.ALL ? getEmails(pageNo) : getEmails())
      .then((data) => {
        if (data) {
          setEmailList(data.list);
          totalPages.current = Math.ceil(data.total / 10);
        } else {
          setEmailList(null);
        }
      })
      .finally(() => setIsLoading(false));
  }, [filter, pageNo]);

  return (
    <>
      <Filters filter={filter} setFilter={setFilter} readEmails={readEmails} favoriteEmails={favoriteEmails} />
      <EmailList
        {...{
          emailList,
          isLoading,
          filter,
          pageNo,
          setPageNo,
          totalPages,
          readEmails,
          setReadEmails,
          favoriteEmails,
          setFavoriteEmails,
        }}
      />
    </>
  );
};

export default EmailsHome;
