let Web3 = require('web3');
let contract = require("truffle-contract");

let provider = new Web3.providers.HttpProvider("http://localhost:8545");
let web3 = new Web3(provider);

let walletAbi = require('./build/contracts/Wallet.json');
let walletLibraryABI = require('./build/contracts/WalletLibrary.json');
var WalletLibrary = contract(walletLibraryABI); 
var Wallet = contract(walletAbi); 
WalletLibrary.setProvider(provider);
Wallet.setProvider(provider);

// get status:
Wallet.deployed().then((instance) => {
    console.log('WALLET:\t' + web3.fromWei(web3.eth.getBalance(instance.address)) + ' ETH');
    console.log('YOU:\t' + web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0])) + ' ETH');
})