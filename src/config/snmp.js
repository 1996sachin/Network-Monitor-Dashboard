const snmp = require('net-snmp');

const SNMP_OPTIONS = {
  version: snmp.Version2c,
  timeout: 2000,
  retries: 1
};

module.exports = {
  snmp,
  SNMP_OPTIONS
};
