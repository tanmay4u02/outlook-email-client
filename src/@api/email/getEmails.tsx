import API_BASE_URL from '@api/apiBaseUrl';

const getEmails = (page?: number) =>
  fetch(`${API_BASE_URL}${page && '?page=' + page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else return null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

export default getEmails;
