

$.fn.loadPlaces = function (firestore) {
  console.log("lode places init");

  firestore.collection("places").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      $("#cards").append("<div class='card-ind shadow-1'><div class='inner-card d-flex flex-wrap'><div class='card-left'><i class='fa fa-home'></i></div><div class='card-right'><h4>Henstraße 3, Weimar 99428</h4><a type='button' class='btn btn-primary text-white' href='place.html'>show details</a></div></div></div>");
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(JSON.stringify(doc.data()));
    });
  });
}