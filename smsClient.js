const Vonage = require('@vonage/server-sdk');

const smsClient = new Vonage({
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_SECRET,
});

module.exports = {
  smsClient,
  default: smsClient,
};
