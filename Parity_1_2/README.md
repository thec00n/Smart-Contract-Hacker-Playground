# Parity MultiSig hacking challenge 

This repository contains two challenges that are based on the Parity hacks from July (Level 1) and November 2017 (Level 2). The contracts have been sliglty modoified so they compile with more recent versions of solc. 

## Installation :minidisc:

- Make sure you have `node` installed in a recent version installed.
- Run `npm install` to install dependencies. 

## Launch a level :rocket:

Afterwards launch corresponding challenge script which contains description

```bash
$ ./start_level 1

$ ./start_level 2
```

## Level 1 :video_game:

### Mission brief 

You are the security engineer of project Avalanche. News breaks that there is a vulnerability that allows attackers to withdraw all funds from the MultiSig wallet that project Avalanche is using. The CTO of project Avalanche who has the keys to the wallet is on a quest to find himself. He is on a silent retreat and does not pick up the phone. After panicking for few moments ... you realise you have only one choice ... you need to hack the wallet yourself and secure the funds (100k ETH) before someone else does.



## Level 2 :video_game:

### Mission brief 

You have managed to secure the funds for project Avalanche successfully. Things have been running smoothly and you have migrated the funds back into the patched MultiSig wallet. One day you stumble upon the following Reddit post from user BTCMax101 :neckbeard:


> You inferior smart contract hipsters, I told you all along BTC is the only one that counts the rest are shit coins. You will never be able to secure full turing complete  


someone who claims that they can lock up all the funds in Parity MultiSig wallets. After reviewing the code WalletLibrary you realise that there is something to it. Nobody has exploited the vulnerability yet. The CTO of project Avalanche who has the keys to the wallet is on a diving trip and does not pick up the phone, you must act quickly. What can you do to secure the funds and prevent an attacker from locking up all your ETH.

```

### Credits
Thanks to 

>Since we run on a simulated network, you can simply unlock any account. For the sake of the challenge please try to avoid that =)

>When restarting a challenge or starting a new one, make sure to close the opened network terminal.
