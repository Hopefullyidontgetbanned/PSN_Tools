const fs = require('fs');
const crypto = require('crypto');

if (process.argv.length != 3) { console.log("node ps4update.js <.txt>"); return; }

const PS4KEY = Buffer.from('AD62E37F905E06BC19593142281C112CEC0E7EC3E97EFDCAEFCDBAAFA6378D84', 'hex');
var titleIDs = fs.readFileSync(process.argv[2]).toString().split(",");

for (let i = 0; i < titleIDs.length; i++) {
  let ID = 'np_' + titleIDs[i].trim();
  let ID_NonHashed = titleIDs[i].trim();
  let seed = crypto.createHmac('sha256', PS4KEY).update(ID).digest('hex');
  console.log(`https://gs-sec.ww.np.dl.playstation.net/plo/np/${ID_NonHashed}/${seed}/${ID_NonHashed}-ver.xml`);
}
