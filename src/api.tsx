const fetchUser = () =>
  fetch("https://api.github.com/users/bautancredi")
    .then((res) => res.json())
    .then((data) => data);

export default fetchUser;
