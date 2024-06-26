
// api
export const usersAPI = {
  getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  },
  getUserComment(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  },
  getUser(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }
}

