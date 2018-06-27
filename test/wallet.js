var Wallet = artifacts.require("Wallet");
var WalletLibrary = artifacts.require("WalletLibrary");
var Web3 = require('web3');

let provider = new Web3.providers.HttpProvider("http://localhost:8545");
let web3 = new Web3(provider);


contract('Wallet', function() {
  it("should be empty", function() {
    return Wallet.deployed().then((instance) => {
      let ether = web3.fromWei(web3.eth.getBalance(instance.address));
      console.log('WALLET:\t' + ether + ' ETH');
      assert.equal(0, ether.toNumber(), 'Wallet still has funds left')
    });
  });
  it("should have transfered all funds to your account", function() {
    return Wallet.deployed().then((instance) => {
      let ether = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]));
      console.log('YOU:\t' + ether + ' ETH');
      assert(ether.toNumber() >= 100000, '100k ETH are still not secured...')
    });
  });
});
