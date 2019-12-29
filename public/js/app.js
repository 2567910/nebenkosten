// Set the configuration for your app
// TODO: Replace with your project's config object
//   var config = {
//     apiKey: "AIzaSyDJHa_qd28muromBAb9RqPyIk12AJevPtQ",
//     authDomain: "nebenkosten-6b4ec.firebaseapp.com",
//     databaseURL: "https://databaseName.firebaseio.com",
//     storageBucket: "bucket.appspot.com"
//   };
//   firebase.initializeApp(config);

// Get a reference to the database service



document.addEventListener('DOMContentLoaded', function () {
    console.log("App.js");
    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] ===
          'function');
        document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
      } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
      }

    //   var db = firebase.database().ref().child('test');
    //   db.on('value', function(snapshot) {
    //     showPlaces(snapshot.val());
    // });
    var firestore = firebase.firestore();
    // firestore.collection("places").add({
    //     stadt: "Weimar",
    //     plz: 99428,
    //     strasse: "Schwarzberg Str.",
    //     hausnummer: "2a",
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
    validateForms();
    logWeinheit(firestore);

});


function logWeinheit(firestore){
    firestore.collection("places").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(JSON.stringify(doc.data()));
    });
});
}
function validateForms(){

          // Example starter JavaScript for disabling form submissions if there are invalid fields

              // Fetch all the forms we want to apply custom Bootstrap validation styles to
              var forms = document.getElementsByClassName('needs-validation');

              // Loop over them and prevent submission
              var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });


}