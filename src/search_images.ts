import https from 'https';

const queries = [
  "Annunciation Fra Angelico",
  "Visitation Giotto",
  "Nativity Gerard van Honthorst",
  "Presentation in the Temple Rembrandt",
  "Finding in the Temple William Holman Hunt",
  "Agony in the Garden Carl Heinrich Bloch",
  "Flagellation of Christ Bouguereau",
  "Crowning with Thorns Caravaggio",
  "Christ Carrying the Cross El Greco",
  "Crucifixion Velazquez",
  "Resurrection Carl Heinrich Bloch",
  "Ascension Garofalo",
  "Pentecost El Greco",
  "Assumption of the Virgin Titian",
  "Coronation of the Virgin Velazquez",
  "Baptism of Christ Piero della Francesca",
  "Wedding at Cana Veronese",
  "Sermon on the Mount Carl Heinrich Bloch",
  "Transfiguration Raphael",
  "Last Supper Leonardo da Vinci"
];

const searchImage = (query) => {
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
  const results = [];
  for (const q of queries) {
    const url = await searchImage(q);
    results.push(url);
    console.log(`"${url}",`);
  }
}

run();
