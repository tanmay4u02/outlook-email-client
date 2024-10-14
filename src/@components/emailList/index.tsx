import React from 'react';
import Container from '@components/layout/Container';
import EmailListItem from './EmailListItem';
import IEmailListItem from '@interfaces/IEmailListItem';

const EmailList: React.FC<{
  emailList: IEmailListItem[] | null;
  isLoading: boolean;
  selectedEmailId: number | null;
  setSelectedEmailId: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ emailList, isLoading, selectedEmailId, setSelectedEmailId }) => {
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
      <div className="w-full">
        {emailList.length === 0 ? (
          <span className="mx-auto text-center text-xl block pt-8">No Data</span>
        ) : (
          <ul className="h-[calc(100vh-14vh)] overflow-y-scroll pr-2">
            {emailList.map((email) => (
              <EmailListItem emailListItem={email} isFavorite key={email.id} />
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default EmailList;
