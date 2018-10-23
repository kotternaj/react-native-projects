const functions = require('firebase-functions');
const createUser = require('./createUser');
const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json');
const requestOneTimePassword = require('./request_one_time_pw');
const verifyOneTimePassword = require('./verify_one_time_pw');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-pw-857b9.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);
