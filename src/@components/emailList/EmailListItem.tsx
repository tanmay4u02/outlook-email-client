import Badge from '@components/layout/Badge';
import IEmailListItem from '@interfaces/IEmailListItem';
import React from 'react';

const EmailListItem: React.FC<{
  emailListItem: IEmailListItem;
  isRead?: boolean;
  isFavorite?: boolean;
  isSelected?: boolean;
  onClick: (emailListItem: IEmailListItem) => void;
}> = ({ emailListItem, isRead, isFavorite, isSelected, onClick }) => {
  return (
    <li
      className={`px-6 py-3 mb-6 border-2 rounded-lg flex text-base border-border ${isSelected && 'border-accent'} bg-white cursor-pointer hover:border-accent ${isRead && '!bg-secondary-background'}`}
      onClick={() => onClick(emailListItem)}
    >
      <div>
        <Badge>{emailListItem.from.name.charAt(0).toUpperCase()}</Badge>
      </div>
      <div className="ms-6 w-4/5">
        <h3>
          From: <span className="font-semibold">{`${emailListItem.from.name} <${emailListItem.from.email}>`}</span>
        </h3>
        <h3>
          Subject: <span className="font-semibold">{emailListItem.subject}</span>
        </h3>
        <div className="mt-1 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
          {emailListItem.short_description}
        </div>
        <h4 className="mt-2 text-sm">
          34/92/2737 10:30am {isFavorite && <span className="ms-6 text-accent font-medium">Favorite</span>}
        </h4>
      </div>
    </li>
  );
};

export default EmailListItem;
