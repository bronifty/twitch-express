const Vonage = require('@vonage/server-sdk');
// const SMS_API_KEY = process.env.SMS_API_KEY;
// const SMS_API_SECRET = process.env.SMS_API_SECRET;

const smsClient = new Vonage({
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_SECRET,
});

module.exports = {
  smsClient,
  default: smsClient,
};
