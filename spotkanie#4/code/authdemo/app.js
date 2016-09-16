(function() {
  const email = document.querySelector('.auth-email');
  const password = document.querySelector('.auth-password');
  const loginButton = document.querySelector('.auth-login');
  const registerButton = document.querySelector('.auth-register');
  const logoutButton = document.querySelector('.auth-logout');

  const auth = firebase.auth();

  registerButton.addEventListener('click', event => {
    let emailV = email.value;
    let passwordV = password.value;

    auth.createUserWithEmailAndPassword(emailV, passwordV)
      .catch(error => {
        console.log(error);
      });
  });

  loginButton.addEventListener('click', event => {
    let emailV = email.value;
    let passwordV = password.value;

    auth.signInWithEmailAndPassword(emailV, passwordV)
      .catch(error => {
        console.log(error);
      });
  });

  logoutButton.addEventListener('click', event => {
    auth.signOut();
  });

  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      logoutButton.classList.remove('hidden');
    } else {
      console.log('not logged in');
      logoutButton.classList.add('hidden');
    }
  });
}());
