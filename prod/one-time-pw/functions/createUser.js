const admin = require('firebase-admin');

module.exports = function(res, req) {
    //Verify user provided a phone #
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input '});
    }

    //Format the phone # to remove - and ()
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    //Create a new user account using that phone #
    admin.auth().createUser({ uid: phone })
      .then(user => res.send(user))
      .catch(err => res.status(422).send ({ error: err }));
}