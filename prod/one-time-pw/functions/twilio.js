const twilio = require('twilio');

const accountSid = 'AC08a8634xxxxx';
const authToken = '522f8f7xxxx';

module.exports = new twilio.Twilio(accountSid, authToken);

