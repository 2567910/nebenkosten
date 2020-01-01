



$.fn.newPlace = function (firestore) {
    $('#toBeTranslatedForm').submit(function () {
        console.log("form was submittet");
        firestore.collection("places").add({
            stadt: $('#city').val(),
            plz: $('#zip').val(),
            strasse: $('#street').val(),
            hausnummer: $('#street-number').val(),
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                document.location.href = "/";
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });


    });

}