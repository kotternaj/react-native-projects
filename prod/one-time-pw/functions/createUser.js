const admin = require('firebase-admin');

module.exports = function(res, req) {
    //Verify user provided a phone #
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input '});
    }

    //Format the phone # to remove - and ()
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    
}