import IEmailListItem from '@interfaces/IEmailListItem';
import React from 'react';

const EmailListItem: React.FC<{ emailListItem: IEmailListItem; isRead?: boolean; isFavorite?: boolean }> = ({
  emailListItem,
  isRead,
  isFavorite,
}) => {
  return (
    <li
      className={`p-2 py-3 mb-6 border-2 rounded-lg flex text-base border-border bg-white ${isRead && '!bg-secondary-background'}`}
      key={emailListItem.id}
    >
      <div className="h-12 w-12 bg-accent rounded-full ms-6 flex items-center text-white text-2xl justify-center font-semibold">
        F
      </div>
      <span className="ms-6">
        <h3>
          From: <span className="font-medium">abc@gma.com</span>
        </h3>
        <h3>
          Subject: <span className="font-medium">Lorem Ipsom</span>
        </h3>
        <p className="mt-1 text-sm">jsdhsjd sjdhsjd sdshjdhsdjsd sdshdjsdhsjd sdhsjds</p>
        <h4 className="mt-2 text-sm">
          34/92/2737 10:30am {isFavorite && <span className="ms-6 text-accent font-medium">Favorite</span>}
        </h4>
      </span>
    </li>
  );
};

export default EmailListItem;
