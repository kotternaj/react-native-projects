const functions = require('firebase-functions');
const createUser = require('./createUser');
const admin = require('firebase-admin');

exports.createUser = functions.https.onRequest(createUser);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-pw-857b9.firebaseio.com"
  });