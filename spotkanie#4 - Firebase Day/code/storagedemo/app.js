(function() {
  const bar = document.querySelector('progress.upload');
  const uploader = document.querySelector('input.upload');
  const target = document.querySelector('img.upload');

  uploader.addEventListener('change', event => {
    let file = event.target.files[0];
    let storage = firebase.storage().ref('folder/' + file.name);

    let upload = storage.put(file);

    upload.on('state_changed',
      function progress(snapshot) {
        bar.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },

      function error(error) {
        console.log(error);
      },

      function complete() {
        storage.getDownloadURL()
          .then(url => {
            target.src = url;
          });
      }
    );
  });
}());
