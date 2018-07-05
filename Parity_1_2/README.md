# Parity MultiSig hacking challenge 

This repository contains two challenges that are based on the Parity hacks from July (Level 1) and November 2017 (Level 2). The contracts have been sliglty modoified so they compile with more recent versions of solc. 

## Installation :minidisc:

- Make sure you have `node` installed in a recent version installed.
- Run `npm install` to install dependencies. 

## Launch a level :rocket:

Launch levels with `start_level`

```bash
$ ./start_level 1

$ ./start_level 2
```

## Level 1 :video_game:

You are the security engineer of project Avalanche. News breaks that there is a vulnerability that allows attackers to withdraw all funds from the MultiSig wallet that project Avalanche is using. The CTO of project Avalanche who has the keys to the wallet is on a quest to find himself. He is on a silent retreat and does not pick up the phone. After panicking for few moments ... :cold_sweat: ... you realise you have only one choice ... you need to hack the wallet yourself and secure the funds (100k ETH) before someone else does.

You check and you have some ETH in your wallet 0xd34435a94f999e0e9fc7c3780a15aa1a815f76e9 to send transactions. You complete the level when have you more than 100k ETH in your wallet. Run `./get_status 1` to make sure you completed the level successfully.  


## Level 2 :video_game:

You have managed to secure the funds for project Avalanche successfully. Things have been running smoothly and you have migrated the funds back into the patched MultiSig wallet. One day you stumble upon the following Reddit post from user CptBTCBeard1337 :neckbeard:

> You inferior smart contract hipsters, I told you all along BTC is the only one that counts the rest are shit coins. You will never be able to secure a full turing complete programing language HARHAR. I have found a vulnerability in your MultiSig wallet that allows me to destroy all your worthless coins. Dump all your ETH and buy BTC or prepare to be annihilated. You have 1 hour :boom: HARHAR.

What a jerk ... after reviewing the code in WalletLibrary you realise that there might be something to it. The CTO of project Avalanche who has the keys to the wallet is on a diving trip and does not pick up the phone ... :scream: ... you must act quickly. What can you do to secure the funds and prevent CptBTCBeard1337 from locking up all your ETH.

You check and you have some ETH in your wallet 0xd34435a94f999e0e9fc7c3780a15aa1a815f76e9 to send transactions. You complete the level when CptBTCBeard1337 is no longer able to lockup your ETH.  Run `./get_status 2` to make sure you completed the level successfully.  


## Notes

- Restart a challenge by just CTRL+C and run `./start_level` again

## Credits

- Thanks to N1k1tung or creating the initial draft
- Thanks to XXX 
