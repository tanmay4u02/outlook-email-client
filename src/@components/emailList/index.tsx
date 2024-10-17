import React, { useEffect, useState } from 'react';
import Container from '@components/layout/Container';
import EmailListItem from './EmailListItem';
import IEmailListItem from '@interfaces/IEmailListItem';
import SelectedEmail from '@components/seletedEmail';
import getFilteredEmailList from '@utils/getFilteredEmailList';
import modifySet from '@utils/modifySet';

const EmailList: React.FC<{
  emailList: IEmailListItem[] | null;
  isLoading: boolean;
  filter: string;
}> = ({ emailList, isLoading, filter }) => {
  const [selectedEmail, setSelectedEmail] = useState<IEmailListItem | null>(null);

  const [readEmails, setReadEmails] = useState(new Set<string>(JSON.parse(localStorage.getItem('readEmails') ?? '[]')));
  const [favoriteEmails, setFavoriteEmails] = useState(
    new Set<string>(JSON.parse(localStorage.getItem('favoriteEmails') ?? '[]'))
  );

  const onClick = (emailListItem: IEmailListItem) => {
    setSelectedEmail(emailListItem);
    const updateReadEmails = modifySet(readEmails, 'ADD', emailListItem.id);

    localStorage.setItem('readEmails', JSON.stringify(Array.from(updateReadEmails)));
    setReadEmails(updateReadEmails);
  };

  const markAsUnread = (id: string) => {
    const updateReadEmails = modifySet(readEmails, 'DELETE', id);

    localStorage.setItem('readEmails', JSON.stringify(Array.from(updateReadEmails)));
    setReadEmails(updateReadEmails);
  };

  const toggleFavorite = (id: string) => {
    if (id !== '') {
      let updateFavoriteEmails;

      if (favoriteEmails.has(id)) {
        updateFavoriteEmails = modifySet(favoriteEmails, 'DELETE', id);
      } else {
        updateFavoriteEmails = modifySet(favoriteEmails, 'ADD', id);
      }

      localStorage.setItem('favoriteEmails', JSON.stringify(Array.from(updateFavoriteEmails)));
      setFavoriteEmails(updateFavoriteEmails);
    }
  };

  useEffect(() => {
    setSelectedEmail(null);
  }, [filter]);

  if (isLoading) {
    return (
      <Container>
        <span className="mx-auto text-center text-xl block pt-8">Loading...</span>
      </Container>
    );
  }

  if (!emailList) {
    return (
      <Container>
        <span className="mx-auto text-center text-xl block pt-8">Something went wrong</span>
      </Container>
    );
  }

  const filteredEmailList = getFilteredEmailList({ filter, emailList, readEmails, favoriteEmails });

  return (
    <Container>
      <div className={`w-full h-[calc(100vh-14vh)] ${selectedEmail && 'flex justify-between gap-6'}`}>
        {filteredEmailList.length === 0 ? (
          <span className="mx-auto text-center text-xl block pt-8">No Data</span>
        ) : (
          <>
            <ul className={`overflow-y-scroll pr-2 min-w-[30rem] h-full ${selectedEmail && 'w-[35%]'}`}>
              {filteredEmailList.map((email) => (
                <EmailListItem
                  emailListItem={email}
                  isRead={readEmails.has(email.id)}
                  isSelected={selectedEmail?.id === email.id}
                  isFavorite={favoriteEmails.has(email.id)}
                  onClick={onClick}
                  key={email.id}
                />
              ))}
            </ul>
            {selectedEmail && (
              <SelectedEmail
                selectedEmail={selectedEmail}
                markAsUnread={markAsUnread}
                toggleFavorite={toggleFavorite}
                isRead={readEmails.has(selectedEmail.id ?? '')}
                isFavorite={favoriteEmails.has(selectedEmail.id ?? '')}
              />
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default EmailList;
