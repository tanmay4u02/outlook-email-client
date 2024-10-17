import { getEmailBody } from '@api/email/getEmails';
import PrimarySelectButton from '@components/buttons/PrimarySelectButton';
import SelectButton from '@components/buttons/SelectButton';
import Badge from '@components/layout/Badge';
import IEmailListItem from '@interfaces/IEmailListItem';
import React, { useEffect, useState } from 'react';

const SelectedEmail: React.FC<{
  selectedEmail: IEmailListItem | null;
  markAsUnread: (id: string) => void;
  toggleFavorite: (id: string) => void;
  isRead?: boolean;
  isFavorite?: boolean;
}> = ({ selectedEmail, markAsUnread, toggleFavorite, isRead, isFavorite }) => {
  const [emailBody, setEmailBody] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedEmail?.id) {
      setIsLoading(true);

      getEmailBody(selectedEmail.id)
        .then((data) => {
          if (data) {
            setEmailBody(data.body);
          }
        })
        .finally(() => setIsLoading(false));
    }

    setEmailBody(null);
  }, [selectedEmail]);

  if (isLoading) {
    return (
      <div className="p-2 w-[64%] border-2 border-border rounded-lg bg-white">
        <div className="mx-auto text-center text-xl block pt-8">Loading...</div>
      </div>
    );
  }

  if (!emailBody || !selectedEmail) {
    return (
      <div className="p-2 w-[64%] border-2 border-border rounded-lg bg-white">
        <div className="mx-auto text-center text-xl block pt-8">Something went wrong</div>
      </div>
    );
  }

  return (
    <div className="p-2 w-[64%] border-2 border-border rounded-lg bg-white">
      {isLoading ? (
        <div className="mx-auto text-center text-xl block pt-8">Loading...</div>
      ) : (
        <article className="p-4 pr-8 flex h-full overflow-y-scroll">
          <div className="me-5">
            <Badge>{selectedEmail.from.name.charAt(0).toUpperCase()}</Badge>
          </div>
          <div className="w-full">
            <summary className="text-3xl font-[550] list-none flex justify-between">
              <span>{selectedEmail.subject}</span>
              <span className="text-right">
                {isRead && (
                  <SelectButton
                    text="Mark as unread"
                    onClick={() => markAsUnread(selectedEmail.id ?? '')}
                    className="my-auto pt-[5px] pb-1 text-sm border-0"
                  />
                )}
                <PrimarySelectButton
                  text={isFavorite ? 'Remove from favorites' : 'Mark as favorite'}
                  onClick={() => {
                    toggleFavorite(selectedEmail.id ?? '');
                  }}
                  className="my-auto pt-[5px] pb-1"
                />
              </span>
            </summary>
            <h3 className="text-sm mt-4">64/92/2737 10:30am</h3>
            <div className="mt-6 [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: emailBody ?? '' }} />
          </div>
        </article>
      )}
    </div>
  );
};

export default SelectedEmail;
