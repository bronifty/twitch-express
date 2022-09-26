require('dotenv').config();
console.log(
  'process.env.TWITCH_CLIENT_ID_TEST: ',
  process.env.TWITCH_CLIENT_ID_TEST
);

// make a post request to the following endpoint: https://id.twitch.tv/oauth2/token
// with the following parameters:
// client_id: your client id
// client_secret: your client secret
// grant_type: client_credentials
// scope: channel:read:redemptions
// const getAccessToken = async () => {
//   const response = await fetch('https://id.twitch.tv/oauth2/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       client_id: process.env.TWITCH_CLIENT_ID_TEST,
//       client_secret: process.env.TWITCH_CLIENT_SECRET_TEST,
//       grant_type: 'client_credentials',
//     }),
//   });
//   const data = await response.json();

//   console.log('response: ', data);
//   return data;
// };

const getAccessTokenPromise = async () => {
  return await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.TWITCH_CLIENT_ID_TEST,
      client_secret: process.env.TWITCH_CLIENT_SECRET_TEST,
      grant_type: 'client_credentials',
    }),
  });
};

module.exports = {
  getAccessTokenPromise,
  default: getAccessTokenPromise,
};

// const resolveAccessTokenPromise = async () => {
//   let access_token_promise = await getAccessTokenPromise();
//   let access_token = await access_token_promise.json();
//   console.log('access_token in resolveAccessTokenPromise: ', access_token);
//   if (access_token) {
//     return access_token;
//   } else {
//     return null;
//   }
// };

// resolveAccessTokenPromise().then((res) => {
//   console.log('res in resolveAccessTokenPromise: ', res);
//   exports.access_token = res;
// });

// async function connect() {
//   let connection = await oracledb.getConnection(config);
//   if (connection) {
//     return connection;
//   } else {
//     return null;
//   }
// }

// connect().then((res) => {
//   exports.connection = res;
// });

// let access_token = null;
// const setAccessToken = async () => {
//   access_token = await getAccessToken();
//   console.log('access_token: ', access_token);
// };
// setAccessToken();
// console.log('access_token outside : ', access_token);

// module.exports = getAccessToken;

// async function connect() {
//   let connection = await oracledb.getConnection(config);
//   if (connection) {
//     return connection;
//   } else {
//     return null;
//   }
// }

// connect().then((res) => {
//   exports.connection = res;
// });

// // resolve promise then export access_token

// // console.log('access_token: ', access_token);

// // getAccessToken().then((data) => (access_token = data));

// // console.log('getAccessToken: ', { access_token });

// // const Url = 'https://id.twitch.tv/oauth2/token';
// // console.log(process.env.TWITCH_CLIENT_ID, process.env.TWITCH_CLIENT_SECRET);
// // const Data = {
// //   client_id: process.env.TWITCH_CLIENT_ID,
// //   client_secret: process.env.TWITCH_CLIENT_SECRET,
// //   grant_type: 'client_credentials',
// // };
// // const Params = {
// //   headers: { 'Content-Type': 'application/json' },
// //   body: Data,
// //   method: 'POST',
// // };

// // let access_token = '';
// // fetch(Url, Params)
// //   .then((response) => {
// //     response.json();
// //   })
// //   .then((data) => {
// //     console.log({ data });
// //     // access_token = data.access_token;
// //     // console.log(access_token);
// //   });

// // // convert curl to fetch
// // // curl -X GET 'https://api.twitch.tv/helix/users?login=twitchdev' \
// // // -H 'Authorization: Bearer jostpf5q0puzmxmkba9iyug38kjtg' \
// // // -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz'

// // // fetch
// // fetch('https://api.twitch.tv/helix/users?login=twitchdev', {
// //   method: 'GET',
// //   headers: {
// //     Authorization: `Bearer ${access_token}`,
// //     'Client-Id': `${process.env.TWITCH_CLIENT_ID}`,
// //   },
// // })
// //   .then((response) => response.json())
// //   .then((data) => console.log(data));

// // module.exports = {
// //   access_token,
// //   default: access_token,
// // };
