var WalletEvents = artifacts.require("./WalletEvents.sol");
var WalletLibrary = artifacts.require("WalletLibrary");
var Web3 = require('web3');
var fs = require('fs');

module.exports = function(deployer, network) {
  if (network.toString() != 'challenge')
    return;

  deployer.deploy(WalletEvents, {overwrite: false});
  deployer.link(WalletEvents, WalletLibrary);
  deployer.deploy(WalletLibrary, {overwrite: false});
  var walletJson = JSON.parse(fs.readFileSync("./build/contracts/Wallet.json").toString());
  deployer.then(() => {
    walletJson.bytecode = walletJson.bytecode.replace(/cafecafecafecafecafecafecafecafecafecafe+/g, WalletLibrary.address.split('0x')[1].toLowerCase());
    walletJson.deployedBytecode = walletJson.deployedBytecode.replace(/cafecafecafecafecafecafecafecafecafecafe+/g, WalletLibrary.address.split('0x')[1].toLowerCase());
    fs.writeFileSync("./build/contracts/Wallet.json", JSON.stringify(walletJson, null, 2));
    var provider = new Web3.providers.HttpProvider("http://localhost:8545");
    var web3 = new Web3(provider);
    var Wallet = artifacts.require("./Wallet.sol");
    deployer.link(WalletEvents, Wallet);
    deployer.link(WalletLibrary, Wallet);
    // console.log('  Deploying Wallet...');
    return deployer.deploy(Wallet, [web3.eth.accounts[2]], 2, web3.toWei(10, 'ether'), {from: web3.eth.accounts[1]});//Wallet.new([web3.eth.accounts[2]], 2, web3.toWei(10, 'ether'), {from: web3.eth.accounts[1]});
  }).then((walletInstance) => {
    // console.log('  Wallet ' + walletInstance.address);
    // fund the contract
    web3.eth.sendTransaction({from: web3.eth.accounts[1], to: walletInstance.address, value: web3.toWei(50000, 'ether'), gas: '500000'});
    web3.personal.lockAccount(web3.eth.accounts[1]);
    web3.eth.sendTransaction({from: web3.eth.accounts[2], to: walletInstance.address, value: web3.toWei(50000, 'ether'), gas: '500000'});
    web3.personal.lockAccount(web3.eth.accounts[2]);
  });
  
  
};
