export default function auth ({ to, from, store, next }) {

  let user = localStorage.getItem('user');
  let loggedIn = user;

  if (loggedIn) {
    return next({
      name: 'home'
    })
  }

  return next()
}