const fs = require('fs');
const crypto = require('crypto');

if (process.argv.length != 3) { console.log("node vitaupdate.js <.txt>"); return; }

const PS4KEY = Buffer.from('E5E278AA1EE34082A088279C83F9BBC806821C52F2AB5D2B4ABD995450355114', 'hex');
var titleIDs = fs.readFileSync(process.argv[2]).toString().split(",");

for (let i = 0; i < titleIDs.length; i++) {
  let ID = 'np_' + titleIDs[i].trim();
  let ID_NonHashed = titleIDs[i].trim();
  let seed = crypto.createHmac('sha256', PS4KEY).update(ID).digest('hex');
  console.log(`https://gs-sec.ww.np.dl.playstation.net/pl/np/${ID_NonHashed}/${seed}/${ID_NonHashed}-ver.xml`);
}
