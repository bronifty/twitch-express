# twitch-webhooks-express

### The purpose of this app is to get sms notifs when your broadcaster goes live on twitch.

[app on glitch](https://glitch.com/edit/#!/aware-ash-clove)

Steps to get this working:

1. fill in env vars (with your broadcaster id, client id, client secret, and callback url)
2. npm i && npm start
3. go online on twitch (start broadcasting)
4. watch server log and wait sms for notification

## Some reference materials

- [twitch dev console](https://dev.twitch.tv/console/)
- [twurple docs](https://twurple.js.org/)
- [twitch dev docs](https://dev.twitch.tv/docs/eventsub/manage-subscriptions)
- [dotenv vault](https://ui.dotenv.org/)
- [sms sdk docs](https://dashboard.nexmo.com/getting-started/sms)

## tutorials

- [Dist explanation of twitch webhook subs](https://discuss.dev.twitch.tv/t/attempting-to-understand-how-twitch-webhooks-work-with-discord-webhooks/28121/2)
- [Dist tut on twitch webhooks in AWS](https://github.com/thedist/Twitch-Webhook-AWS-Tutorial)
- [Courier tut on twitch webhooks](https://www.courier.com/blog/how-to-handle-real-time-twitch-events/)
