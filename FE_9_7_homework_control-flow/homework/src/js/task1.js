function loginUser(login, password, currentTime) {
  currentTime = new Date().getHours();

  do { // will be done at least once
    login = prompt('Write your login', 'user');

    if (login === '' || login === null || login === undefined) { // Verification of input
      alert(`Canceled`);
      return false;
    } else if (login.length < 4) {
      alert(`I don't know any users having name length less than 4 symbols`);
    } else if (login !== 'User') {
      alert(`I don't know you`);
    }
  } while (login !== 'User');

  do { // will be done at least once if previous is success
    password = prompt('Write your password', 'password');

    if (password === '' || password === null || password === undefined) { // Verification of input
      alert(`Canceled`);
      return false;
    } else if (password !== 'SuperUser') {
      alert(`Wrong password!`);
    } else {
      currentTime < 20 ? alert(`Good day!`) : alert(`Good evening!`);
    }
  } while (password !== 'SuperUser');
}

loginUser();