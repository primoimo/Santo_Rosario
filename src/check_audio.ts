import https from 'https';

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    });
  });
};

async function run() {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/4/43/Agnus_Dei_-_Gregorian_Chant.ogg';
  const status = await checkUrl(url);
  console.log(status);
}

run();
