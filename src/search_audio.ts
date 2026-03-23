import https from 'https';

const searchAudio = (query) => {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=File:${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&format=json`;
    const options = {
      headers: {
        'User-Agent': 'SantoRosarioApp/1.0 (primoimoias@gmail.com)'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.query && json.query.pages) {
            const pageId = Object.keys(json.query.pages)[0];
            const imageinfo = json.query.pages[pageId].imageinfo;
            if (imageinfo && imageinfo.length > 0) {
              resolve(imageinfo[0].url);
              return;
            }
          }
          resolve("NOT FOUND: " + query);
        } catch (e) {
          resolve("ERROR: " + query);
        }
      });
    });
  });
};

async function run() {
  const url = await searchAudio('Gregorian chant mp3');
  console.log(url);
}

run();
