const Wallet = require('ethereumjs-wallet');

const rinkebyWallet = Wallet.fromV3(require('./rinkeby/oracle.json'), '111');
const prodWallet = Wallet.fromPrivateKey(
  Buffer.from(require('./prod/deployer-pk').pk, 'hex')
);

module.exports = {
  rinkebyWallet,
  prodWallet
};
