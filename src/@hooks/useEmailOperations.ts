import IEmailListItem from '@interfaces/IEmailListItem';
import modifySet from '@utils/modifySet';

const useEmailOperations = ({
  readEmails,
  setReadEmails,
  favoriteEmails,
  setFavoriteEmails,
  setSelectedEmail,
}: {
  readEmails: Set<string>;
  setReadEmails: React.Dispatch<React.SetStateAction<Set<string>>>;
  favoriteEmails: Set<string>;
  setFavoriteEmails: React.Dispatch<React.SetStateAction<Set<string>>>;
  setSelectedEmail: React.Dispatch<React.SetStateAction<IEmailListItem | null>>;
}) => {
  //on clicking email list item set selected and mark as read
  const onEmailClick = (emailListItem: IEmailListItem) => {
    setSelectedEmail(emailListItem);
    const updateReadEmails = modifySet(readEmails, 'ADD', emailListItem.id);

    localStorage.setItem('readEmails', JSON.stringify(Array.from(updateReadEmails)));
    setReadEmails(updateReadEmails);
  };

  // mark email as unread
  const markAsUnread = (id: string) => {
    const updateReadEmails = modifySet(readEmails, 'DELETE', id);

    localStorage.setItem('readEmails', JSON.stringify(Array.from(updateReadEmails)));
    setReadEmails(updateReadEmails);
  };

  // toggle email as favorite
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

  return { onEmailClick, markAsUnread, toggleFavorite };
};

export default useEmailOperations;
