#!/bin/bash
rm -rf build
rm ./contracts/WalletLibrary.sol
rm ./contracts/Wallet.sol
cp ./library/WalletLibraryPatched.sol ./contracts/WalletLibrary.sol
cp ./library/WalletPatched.sol ./contracts/Wallet.sol


trap 'kill $(jobs -p)' EXIT

npx truffle compile
npx truffle migrate --network challenge
printf "\n=========================================================================================\n\n"
printf "You have managed to secure the funds for project Avalanche successfully. Things have\nbeen running smooth and you have migrated the funds back into the patched MultiSig\nwallet. One day you stumble upon a Reddit post from someone who claims that they can\nlock up all the funds in Parity MultiSig wallets. After reviewing the code WalletLibrary\nyou realise that there is something to it. Nobody has exploited the vulnerability yet.\nThe CTO of project Avalanche who has the keys to the wallet is on a diving trip and does\nnot pick up the phone, you must act quickly. What can you do to secure the funds and\nprevent an attacker from locking up all your ETH.\n\n"
printf "Run 'node status' to check current status of accounts\n"
printf "or 'truffle test' to assert if the goal is complete\n\n"
printf "GOOD LUCK!\n"
printf "\n=========================================================================================\n\n"
