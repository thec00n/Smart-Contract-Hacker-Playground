#!/bin/bash
rm -rf build
rm ./contracts/WalletLibrary.sol
rm ./contracts/Wallet.sol
cp ./library/WalletLibrary.sol ./contracts/WalletLibrary.sol
cp ./library/Wallet.sol ./contracts/Wallet.sol
. ~/.nvm/nvm.sh
nvm use 7
platform='unknown'
unamestr=`uname`
if [[ "$unamestr" == 'Darwin' ]]; then
    open -a Terminal.app network.sh
else
    gnome-terminal -e ./network.sh
fi

truffle compile
truffle migrate --network challenge
printf "\n=========================================================================================\n\n"
printf "You are the security engineer of project Avalanche.\n\nNews breaks that there is a vulnerability that allows attackers to withdraw all funds\nfrom the MultiSig wallet that project Avalanche is using.\nThe CTO of project Avalanche who has the keys to the wallet is on a silent retreat and\ndoes not pick up the phone. After panicking for few moments you realise you have only\none choice but to hack the wallet yourself and secure the funds (100k ETH) before\nsomeone else does.\n\n"
printf "Run 'node status' to check current status of accounts\n"
printf "or 'truffle test' to assert if the goal is complete\n\n"
printf "GOOD LUCK!\n"
printf "\n=========================================================================================\n\n"
