require('dotenv').config();
const { getAccessTokenPromise } = require('./twitchClientDirect');

const resolveAccessTokenPromise = async () => {
  let access_token_promise = await getAccessTokenPromise();
  access_token_resolved = await access_token_promise.json();
  if (access_token_resolved) {
    return access_token_resolved;
  } else {
    return null;
  }
};
let access_token = null;
const run = async () => {
  access_token = await resolveAccessTokenPromise();
  console.log('access_token in run: ', access_token);

  // fetch
  // fetch('https://api.twitch.tv/helix/users?id=141981764', {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${access_token.access_token}`,
  //     'Client-Id': process.env.TWITCH_CLIENT_ID_TEST,
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  const promiseData = await fetch(
    'https://api.twitch.tv/helix/users?id=141981764',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
        'Client-Id': process.env.TWITCH_CLIENT_ID_TEST,
      },
    }
  );
  const data = await promiseData.json();
  console.log('data !!: ', data);

  // make a call to the twitch api with access token
  // const response = await fetch('https://api.twitch.tv/helix/users', {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${access_token.access_token}`,
  //     'Client-Id': process.env.TWITCH_CLIENT_ID_TEST,
  //   },
  // });
  // const data = await response.json();
  // console.log('data: ', data);
};

run();

// convert the curl to a fetch
// curl -X GET 'https://api.twitch.tv/helix/users?id=141981764' \
// -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
// -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'

// // fetch
// fetch('https://api.twitch.tv/helix/users?id=141981764', {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer ${access_token.access_token}`,
//     'Client-Id': process.env.TWITCH_CLIENT_ID_TEST,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
