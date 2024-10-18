import React, { useEffect, useState } from 'react';
import Container from '@components/layout/Container';
import EmailListItem from './EmailListItem';
import IEmailListItem from '@interfaces/IEmailListItem';
import SelectedEmail from '@components/seletedEmail';
import getFilteredEmailList from '@utils/getFilteredEmailList';
import PageInputBox from '@components/pagination/PageInputBox';
import filterTypeConstants from '@constants/filterTypeConstants';
import useEmailOperations from '@hooks/useEmailOperations';

const EmailList: React.FC<{
  emailList: IEmailListItem[] | null;
  isLoading: boolean;
  filter: string;
  pageNo: number;
  totalPages: React.MutableRefObject<number>;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  readEmails: Set<string>;
  setReadEmails: React.Dispatch<React.SetStateAction<Set<string>>>;
  favoriteEmails: Set<string>;
  setFavoriteEmails: React.Dispatch<React.SetStateAction<Set<string>>>;
}> = ({
  emailList,
  isLoading,
  filter,
  pageNo,
  totalPages,
  setPageNo,
  readEmails,
  setReadEmails,
  favoriteEmails,
  setFavoriteEmails,
}) => {
  const [selectedEmail, setSelectedEmail] = useState<IEmailListItem | null>(null);

  const { onEmailClick, markAsUnread, toggleFavorite } = useEmailOperations({
    readEmails,
    setReadEmails,
    favoriteEmails,
    setFavoriteEmails,
    setSelectedEmail,
  });

  useEffect(() => {
    setSelectedEmail(null);
    setPageNo(1);
  }, [filter, setPageNo]);

  if (!isLoading && !emailList) {
    return (
      <Container>
        <span className="mx-auto text-center text-xl block pt-8">Something went wrong</span>
      </Container>
    );
  }

  const filteredEmailList = getFilteredEmailList({ filter, emailList: emailList ?? [], readEmails, favoriteEmails });

  return (
    <Container>
      <div className={`w-full h-[calc(100vh-14vh)] relative ${selectedEmail && 'flex justify-between gap-6'}`}>
        {!isLoading && filteredEmailList.length === 0 ? (
          <span className="mx-auto text-center text-xl block pt-8">No Data</span>
        ) : (
          <>
            <ul className={`overflow-y-scroll pr-2 min-w-[30rem] h-full ${selectedEmail && 'w-[35%]'}`}>
              {isLoading ? (
                <span className="mx-auto text-center text-xl block pt-8">Loading...</span>
              ) : (
                <>
                  {filteredEmailList.map((email) => (
                    <EmailListItem
                      emailListItem={email}
                      isRead={readEmails.has(email.id)}
                      isSelected={selectedEmail?.id === email.id}
                      isFavorite={favoriteEmails.has(email.id)}
                      onClick={onEmailClick}
                      key={email.id}
                    />
                  ))}
                  {filter === filterTypeConstants.ALL && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </>
              )}
            </ul>
            {filter === filterTypeConstants.ALL && (
              <PageInputBox
                pageNo={pageNo}
                setPageNo={setPageNo}
                totalPages={totalPages}
                className={`min-w-[30rem] ${selectedEmail ? 'w-[35%]' : 'w-full'} `}
              />
            )}
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
