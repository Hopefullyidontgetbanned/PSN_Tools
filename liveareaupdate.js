const fs = require('fs');
const crypto = require('crypto');

if (process.argv.length != 3) { console.log("node liveareaupdate.js <.txt>"); return; }

const LiveAreaKEY = Buffer.from('D8DBED766EABCD68D47DDBED9D3CA825837DE8AA789B7FF92D9A1594FCD8EAC4', 'hex');
var titleIDs = fs.readFileSync(process.argv[2]).toString().split(",");

for (let i = 0; i < titleIDs.length; i++) {
  let ID = 'np_' + titleIDs[i].trim();
  let ID_NonHashed = titleIDs[i].trim();
  let seed = crypto.createHmac('sha256', LiveAreaKEY).update(ID).digest('hex');
  console.log(`http://livearea.np.dl.playstation.net/livearea/e/info/np/${ID_NonHashed}/${seed}/${ID_NonHashed}-0.pkg`);
}
