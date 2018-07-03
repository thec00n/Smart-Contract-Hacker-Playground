#!/bin/bash
trap 'kill $(jobs -p)' EXIT

rm -rf build
rm ./contracts/WalletLibrary.sol
rm ./contracts/Wallet.sol
cp ./library/WalletLibrary.sol ./contracts/WalletLibrary.sol
cp ./library/Wallet.sol ./contracts/Wallet.sol

printf "Running test network...\n"
# obfuscate private keys (useful if output is hidden)
KEY1="$(npx hexdump -n 32 -e '4/4 "%08X"' /dev/random)"
KEY2="$(npx hexdump -n 32 -e '4/4 "%08X"' /dev/random)"
# run test network with our hacking account and 2 founder accounts for the MultiSig wallet, optionally remove '> /dev/null' to show output 
npx ganache-cli --account '0x601aaaf5f9ac507ffd34eb3b10bb1bf7b382bf312f460572ba207e4e2b221787, 20000000000000000000' --account "0x$KEY1, 50000100000000000000000" --account "0x$KEY2, 50000100000000000000000" -l 50000000 >/dev/null  & 


printf "Deploying the contracts ..\n"
npx truffle migrate --network challenge
printf "\n=========================================================================================\n\n"
printf "You are the security engineer of project Avalanche.\n\nNews breaks that there is a vulnerability that allows attackers to withdraw all funds\nfrom the MultiSig wallet that project Avalanche is using.\nThe CTO of project Avalanche who has the keys to the wallet is on a silent retreat and\ndoes not pick up the phone. After panicking for few moments you realise you have only\none choice but to hack the wallet yourself and secure the funds (100k ETH) before\nsomeone else does.\n\n"
printf "Run 'node status' to check current status of accounts\n"
printf "or 'truffle test' to assert if the goal is complete\n\n"
printf "GOOD LUCK!\n"
printf "\n=========================================================================================\n\n"

for i in `seq 1 5`; do
    sleep 1337
    echo -n "."
done