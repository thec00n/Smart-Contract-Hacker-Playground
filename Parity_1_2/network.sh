#!/bin/bash
. ~/.nvm/nvm.sh
nvm use 7
printf "Running test network...\n"
# obfuscate private keys (useful if output is hidden)
KEY1="$(hexdump -n 32 -e '4/4 "%08X"' /dev/random)"
KEY2="$(hexdump -n 32 -e '4/4 "%08X"' /dev/random)"
# run test network with our hacking account and 2 founder accounts for the MultiSig wallet, optionally remove '> /dev/null' to show output 
ganache-cli --account '0x601aaaf5f9ac507ffd34eb3b10bb1bf7b382bf312f460572ba207e4e2b221787, 2000000000000000000' --account "0x$KEY1, 50000100000000000000000" --account "0x$KEY2, 50000100000000000000000" -l 50000000 > /dev/null