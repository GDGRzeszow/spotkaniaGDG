(function() {
  const results = document.querySelector('pre.results');
  const input = document.querySelector('input.new');
  const button = document.querySelector('button.new');

  const db = firebase.database().ref('/');

  db.on('value', snapshot => {
    results.innerText = JSON.stringify(snapshot.val(), null, 2);
  });

  button.addEventListener('click', () => {    
    db.set({
      'new': input.value
    });
  });
}());
