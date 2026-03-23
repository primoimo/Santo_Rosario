import fs from 'fs';

async function fixUrls() {
  let data = fs.readFileSync('src/data.ts', 'utf8');
  const regex = /image:\s*"https:\/\/commons\.wikimedia\.org\/wiki\/Special:FilePath\/([^?]+)\?width=1080"/g;
  
  let match;
  const replacements = [];
  
  while ((match = regex.exec(data)) !== null) {
    const filename = decodeURIComponent(match[1]);
    
    // Search for the file instead of exact match
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=File:${encodeURIComponent(filename.replace(/_/g, ' '))}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=1080&format=json`;
    
    try {
      const response = await fetch(searchUrl);
      const json = await response.json();
      
      if (json.query && json.query.pages) {
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        
        if (pageId !== '-1' && pages[pageId].imageinfo) {
          const thumbUrl = pages[pageId].imageinfo[0].thumburl;
          console.log("Found replacement for", filename, "->", thumbUrl);
          replacements.push({
            original: match[0],
            newUrl: `image: "${thumbUrl}"`
          });
        }
      } else {
        console.log("Search found nothing for", filename);
      }
    } catch (e) {
      console.error("Failed to fetch for", filename, e);
    }
  }
  
  for (const rep of replacements) {
    data = data.replace(rep.original, rep.newUrl);
  }
  
  fs.writeFileSync('src/data.ts', data);
  console.log("Done updating URLs!");
}

fixUrls();
