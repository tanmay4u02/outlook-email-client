import filterTypeConstants from '@constants/filterTypeConstants';
import IEmailListItem from '@interfaces/IEmailListItem';

export default function getFilteredEmailList({
  filter,
  emailList,
  readEmails,
  favoriteEmails,
}: {
  filter: string;
  emailList: IEmailListItem[];
  readEmails: Set<string>;
  favoriteEmails: Set<string>;
}) {
  switch (filter) {
    case filterTypeConstants.UNREAD:
      return emailList.filter((email) => !readEmails.has(email.id));

    case filterTypeConstants.READ:
      return emailList.filter((email) => readEmails.has(email.id));

    case filterTypeConstants.FAVORITES:
      return emailList.filter((email) => favoriteEmails.has(email.id));

    default:
      return emailList;
  }
}
