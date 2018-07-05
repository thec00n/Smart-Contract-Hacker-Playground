#!/usr/bin/env node

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

if(process.argv[2] == 1){
	Wallet.deployed().then((instance) => {

	var you_b = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]))
	var wallet_b = web3.fromWei(web3.eth.getBalance(instance.address)) 

	if(you_b >= 100000){
		console.log("Congratulations: You have solved Challenge 1 !!!!")
		console.log('MultiSig wallet: ' + web3.fromWei(web3.eth.getBalance(instance.address)) + ' ETH');
    	console.log('YOU: ' + web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0])) + ' ETH');
	} else {
		console.log("Try harder, time is ticking!")
	}


	})
	.catch(function(error) {
		console.log("Something went wrong.")
	}); 	
} else if(process.argv[2] == 2) {
	var code 
	var owner 

	WalletLibrary.deployed()
	.then((lib) => {
		code = web3.eth.getCode(lib.address).length
		if(code==3){
	    	  console.log('OMG ... have you accidentally killed it?' );  
	    	  process.exit(1);
	    }
	    return lib.getOwner(0).then(function (res) {
	    	owner = res 
		})
	})	
	.then((tx) => {
		if(owner == '0xd34435a94f999e0e9fc7c3780a15aa1a815f76e9'){
			console.log("Congratulations: You have solved Challenge 2 !!!!")
			console.log('You saved it and are now the owner of WalletLibrary . You can safely withdraw all the funds, no one can suicide the contract but you.' ) 
		}

	    else {
			console.log("Try harder, time is ticking!")
		}


	})
	.catch(function(e) {
		console.log("Something went wrong.")
			console.log(e)
	});
}


