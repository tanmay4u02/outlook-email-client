import React from 'react';
import Container from '@components/layout/Container';
import EmailListItem from './EmailListItem';

const EmailList = () => {
  return (
    <Container>
      <div className="w-full">
        <ul>
          <EmailListItem
            emailListItem={{
              id: '1',
              from: {
                email: 'bounced@flipkart.com',
                name: 'bounced',
              },
              date: 1582729505000,
              subject: 'Lorem Ipsum',
              short_description: 'Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa',
            }}
            isFavorite
          />

          <EmailListItem
            emailListItem={{
              id: '1',
              from: {
                email: 'bounced@flipkart.com',
                name: 'bounced',
              },
              date: 1582729505000,
              subject: 'Lorem Ipsum',
              short_description: 'Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa',
            }}
            isRead
          />
        </ul>
      </div>
    </Container>
  );
};

export default EmailList;
