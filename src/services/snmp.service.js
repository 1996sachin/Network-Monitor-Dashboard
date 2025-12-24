const { snmp, SNMP_OPTIONS } = require('../config/snmp');

function getIfOctets(ip, community, oid) {
  return new Promise((resolve, reject) => {
    const session = snmp.createSession(ip, community, SNMP_OPTIONS);

    session.get([oid], (err, varbinds) => {
      session.close();
      if (err) return reject(err);
      resolve(varbinds[0].value);
    });
  });
}

module.exports = { getIfOctets };
