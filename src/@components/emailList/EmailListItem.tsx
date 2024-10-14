import IEmailListItem from '@interfaces/IEmailListItem';
import React from 'react';

const EmailListItem: React.FC<{ emailListItem: IEmailListItem; isRead?: boolean; isFavorite?: boolean }> = ({
  emailListItem,
  isRead,
  isFavorite,
}) => {
  return (
    <li
      className={`p-2 py-3 mb-6 border-2 rounded-lg flex text-base border-border bg-white cursor-pointer hover:bg-secondary-background ${isRead && '!bg-secondary-background'}`}
    >
      <div className="h-12 w-12 bg-accent rounded-full ms-6 flex items-center text-white text-2xl justify-center font-semibold">
        {emailListItem.from.name.charAt(0).toUpperCase()}
      </div>
      <span className="ms-6">
        <h3>
          From: <span className="font-medium">{emailListItem.from.email}</span>
        </h3>
        <h3>
          Subject: <span className="font-medium">{emailListItem.subject}</span>
        </h3>
        <p className="mt-1 text-sm text-ellipsis">{emailListItem.short_description}</p>
        <h4 className="mt-2 text-sm">
          34/92/2737 10:30am {isFavorite && <span className="ms-6 text-accent font-medium">Favorite</span>}
        </h4>
      </span>
    </li>
  );
};

export default EmailListItem;
