import Badge from '@components/layout/Badge';
import IEmailListItem from '@interfaces/IEmailListItem';
import getFormattedDate from '@utils/getFormattedDate';
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
      className={`px-6 py-3 mb-6 border-2 rounded-lg flex text-base border-border ${isSelected && '!border-accent'} bg-white ${isRead && '!bg-secondary-background'} cursor-pointer hover:border-accent`}
      onClick={() => onClick(emailListItem)}
    >
      <div>
        <Badge>{emailListItem.from.name.charAt(0).toUpperCase()}</Badge>
      </div>
      <div className="ms-6 w-4/5 text-sm">
        <h3>
          From: <span className="font-semibold">{`${emailListItem.from.name} <${emailListItem.from.email}>`}</span>
        </h3>
        <h3>
          Subject: <span className="font-semibold">{emailListItem.subject}</span>
        </h3>
        <div className="mt-2 text-ellipsis overflow-hidden whitespace-nowrap">{emailListItem.short_description}</div>
        <h4 className="mt-2 text-xs">
          {getFormattedDate(emailListItem.date)}{' '}
          {isFavorite && <span className="ms-6 text-accent font-medium">Favorite</span>}
        </h4>
      </div>
    </li>
  );
};

export default EmailListItem;
