var admin = require("firebase-admin");

var serviceAccount = require("../../greenpedia_cred.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
let user = db.collection("Users")

user.get().then((querySnapshot) => {
    querySnapshot.forEach(element => {
        console.log(element)
    });
})