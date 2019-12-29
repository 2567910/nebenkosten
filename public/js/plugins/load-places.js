

$.fn.loadPlaces = function (firestore) {
  console.log("lode places init");

  firestore.collection("places").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      $("#cards").append("<div class='card-ind shadow-1'><div class='inner-card d-flex flex-wrap'><div class='card-left'><i class='fa fa-home'></i></div><div class='card-right'><h4>" +
      `${doc.data().strasse}` + " "+
      `${doc.data().hausnummer}` +
      ", " +
      `${doc.data().stadt}` + " " +
      `${doc.data().plz}` +
      "</h4><a class='btn btn-dark text-white' href=" +
      "'place/" + `${doc.id}`+ "'" +
      ">Abrechungen anzeigen</a></div></div></div>");
      console.log(`${doc.id} => ${doc.data().strasse}`);
      console.log(JSON.stringify(doc.data()));
    });
  });
}