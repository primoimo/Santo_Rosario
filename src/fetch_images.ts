import https from 'https';

const files = [
  "File:Fra_Angelico_-_Annunciation_-_WGA00474.jpg",
  "File:Mariä_Heimsuchung_(Giotto).jpg",
  "File:Gerard_van_Honthorst_-_Adoration_of_the_Shepherds_(1622).jpg",
  "File:Rembrandt_-_Simeon_in_the_Temple.jpg",
  "File:William_Holman_Hunt_-_The_Finding_of_the_Saviour_in_the_Temple.jpg",
  "File:Carl_Heinrich_Bloch_-_Gethsemane.jpg",
  "File:Bouguereau-The_Flagellation_of_Our_Lord_Jesus_Christ-1880.jpg",
  "File:Caravaggio_-_The_Crowning_with_Thorns.jpg",
  "File:El_Greco_-_Christ_Carrying_the_Cross_-_1580s.jpg",
  "File:Crucifixion_by_Diego_Velázquez.jpg",
  "File:Resurrection_of_Christ_by_Carl_Heinrich_Bloch.jpg",
  "File:Garofalo_-_Ascension_of_Christ.jpg",
  "File:El_Greco_-_Pentecostés_(Museo_del_Prado,_1596-1600).jpg",
  "File:Tizian_041.jpg",
  "File:Diego_Velázquez_-_Coronation_of_the_Virgin_-_Prado.jpg",
  "File:Piero_della_Francesca_046.jpg",
  "File:Paolo_Veronese_-_The_Wedding_at_Cana_-_Google_Art_Project.jpg",
  "File:Carl_Heinrich_Bloch_-_The_Sermon_on_the_Mount.jpg",
  "File:Transfiguration_Raphael.jpg",
  "File:Leonardo_da_Vinci_-_Last_Supper_(copy)_-_WGA12732.jpg"
];

const fetchUrl = (file) => {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(file)}&prop=imageinfo&iiprop=url&format=json`;
    const options = {
      headers: {
        'User-Agent': 'SantoRosarioApp/1.0 (primoimoias@gmail.com)'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId].imageinfo) {
          resolve(pages[pageId].imageinfo[0].url);
        } else {
          resolve("NOT FOUND: " + file);
        }
      });
    });
  });
};

async function run() {
  for (const file of files) {
    const url = await fetchUrl(file);
    console.log(url);
  }
}

run();
