const fs = require('fs');
const crypto = require('crypto');

if (process.argv.length != 3) { console.log("node tmdb.js <.txt>"); return; }

const TMDBKey = Buffer.from('F5DE66D2680E255B2DF79E74F890EBF349262F618BCAE2A9ACCDEE5156CE8DF2CDF2D48C71173CDC2594465B87405D197CF1AED3B7E9671EEB56CA6753C2E6B0', 'hex');
var titleIDs = fs.readFileSync(process.argv[2]).toString().split(",");

for (let i = 0; i < titleIDs.length; i++) {
  let ID = titleIDs[i].trim() + '_00';
  let seed = crypto.createHmac('sha1', TMDBKey).update(ID).digest('hex');
  console.log(`http://tmdb.np.dl.playstation.net/tmdb2/${ID}_${seed.toUpperCase()}/${ID}.json`);
}