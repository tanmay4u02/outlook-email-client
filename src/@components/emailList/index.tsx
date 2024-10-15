import React, { useState } from 'react';
import Container from '@components/layout/Container';
import EmailListItem from './EmailListItem';
import IEmailListItem from '@interfaces/IEmailListItem';
import SelectedEmail from '@components/seletedEmail';

const EmailList: React.FC<{
  emailList: IEmailListItem[] | null;
  isLoading: boolean;
}> = ({ emailList, isLoading }) => {
  const [selectedEmail, setSelectedEmail] = useState<IEmailListItem | null>(null);

  const onClick = (emailListItem: IEmailListItem) => {
    setSelectedEmail(emailListItem);
  };

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

  return (
    <Container>
      <div className={`w-full h-[calc(100vh-14vh)] ${selectedEmail && 'flex justify-between gap-6'}`}>
        {emailList.length === 0 ? (
          <span className="mx-auto text-center text-xl block pt-8">No Data</span>
        ) : (
          <>
            <ul className={`overflow-y-scroll pr-2 min-w-96 h-full ${selectedEmail && 'w-2/6'}`}>
              {emailList.map((email) => (
                <EmailListItem
                  emailListItem={email}
                  isFavorite
                  isSelected={selectedEmail?.id === email.id}
                  onClick={onClick}
                  key={email.id}
                />
              ))}
            </ul>
            {selectedEmail && <SelectedEmail selectedEmail={selectedEmail} />}
          </>
        )}
      </div>
    </Container>
  );
};

export default EmailList;
