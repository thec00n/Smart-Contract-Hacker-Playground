var POWH = artifacts.require("PonziTokenV3");
var Web3 = require('web3');

module.exports = function(deployer) {
  deployer.deploy(POWH).then((instance) => {
    var provider = new Web3.providers.HttpProvider("http://localhost:8545");
    var web3 = new Web3(provider);

    // fund the contract until balance is >= 1000 ETH
    var total = 0;
    var funds = [];
    console.log("PoWH funds:");
    while (total < 1110) {
      // make a fund from a new contract
      let pwd = Math.random().toString(36).substring(2, 15);
      let acc = web3.personal.newAccount(pwd);
      web3.personal.unlockAccount(acc, pwd);
      // sum in range [1, 10) ETH
      let sum = 1 + Math.random()*49;
      // get it from 'bank' account + a bit extra to be able to send transfer
      web3.eth.sendTransaction({from: web3.eth.accounts[2], to: acc, value: web3.toWei(sum + 0.05, 'ether'), gas: '150000'});
      // send transfer and lock funding account
      let funding = instance.fund({from: acc, value: web3.toWei(sum, 'ether'), gas: '150000'})
                            .then(() => { web3.personal.lockAccount(acc); });
      funds.push(funding);
      total += sum;
      console.log(total.toString() + "ETH");
    }
    // lock 'bank' account
    web3.personal.lockAccount(web3.eth.accounts[2]);

    return Promise.all(funds);
  })
  .then(() => {
  });
};