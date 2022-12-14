require('dotenv').config();
const apiClient = require('./twurpleClient').default;
const { EventSubMiddleware } = require('@twurple/eventsub');
const express = require('express');
const smsClient = require('./smsClient').default;

const port = 3000;
const secret = process.env.TWITCH_SUBSCRIPTION_SECRET_PHRASE;
const userId = process.env.TWITCH_BROADCASTER_ID_TEST;
const hostName = process.env.EXPRESS_HOST_NAME;
// const hostName = process.env.NGROK_HOST_NAME;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const middleware = new EventSubMiddleware({
  apiClient,
  hostName,
  pathPrefix: '/twitch',
  secret,
});
const run = async () => {
  await middleware.apply(app);

  app.listen(port, async () => {
    console.log(`Twitch eventsub listener listening on ${port}`);
    await middleware.markAsReady();
    await middleware.subscribeToStreamOnlineEvents(userId, (e) => {
      console.log(`${e.broadcasterDisplayName} just went live!`);

      smsClient.message.sendSms(
        process.env.SMS_ORIGIN_NUMBER,
        process.env.SMS_DESTINATION_NUMBER,
        `${e.broadcasterDisplayName} just went live!`,
        (err, responseData) => {
          if (err) {
            console.log(err);
          } else {
            if (responseData.messages[0]['status'] === '0') {
              console.log('Message sent successfully.');
            } else {
              console.log(
                `Message failed with error: ${responseData.messages[0]['error-text']}`
              );
            }
          }
        }
      );
    });
  });
};
run();
