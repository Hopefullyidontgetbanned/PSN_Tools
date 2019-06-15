const fs = require('fs');
const crypto = require('crypto');

if (process.argv.length != 3) { console.log("node crepo.js <.txt>"); return; }

var titleIDs = fs.readFileSync(process.argv[2]).toString().split(",");

for (let i = 0; i < titleIDs.length; i++) {
  let ID = titleIDs[i].trim();
  let seed = crypto.createHmac('sha1').update(ID).digest('hex');
  console.log(`http://crepo.ww.dl.playstation.net/download/crepo/ps3/${ID}/config.xml`);
  console.log(`http://crepo.ww.dl.playstation.net/download/crepo/ORBIS/${ID}/config.xml`);
  console.log(`http://crepo.ww.dl.playstation.net/download/crepo/psp2/${ID}/config.xml`);
}
