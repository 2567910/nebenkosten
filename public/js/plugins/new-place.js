
$.fn.newPlace = function (firestore) {


    $('#toBeTranslatedForm').submit(function (event) {
        console.log("form was submittet" + $('#city').val() + $('#street').val());
        event.preventDefault();
        firestore.collection("places").add({
            stadt: $('#city').val(),
            plz: 99427,
            strasse: $('#street').val(),
            hausnummer: 11,
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                document.location.href = "/";

            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                document.location.href = "/";
            });
    });

    // $('#toBeTranslatedForm').submit(function () {
    //     console.log("form was submittet" + $('#city').val() + $('#street').val());
    //     firestore.collection("places").add({
    //         stadt: $('#city').val(),
    //         plz: 99427,
    //         strasse: $('#street').val(),
    //         hausnummer: 11,
    //     })
    //         .then(function (docRef) {
    //             console.log("Document written with ID: ", docRef.id);
    //             document.location.href = "/";

    //         })
    //         .catch(function (error) {
    //             console.error("Error adding document: ", error);
    //             document.location.href = "/";
    //         });


    // });

}