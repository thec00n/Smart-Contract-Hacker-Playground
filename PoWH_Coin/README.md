# PoWH coin hacking challenge

This repository contains a challenge that is based on the PoWH (Proof of Weak Hands) ponzi token contract hack from Feb 2018 (Level 3).

## Installation :minidisc:

- Make sure you have `nodejs` 10.x and `npm` 6.x installed
- Run `npm install` to install dependencies.

## Launch a level :rocket:

Launch levels with `start_level`

```bash
$ ./start_level 3
```

## Level 3 :video_game:

You are the TCO and co-founder in a cryptocurrency startup. ICO is nearing and with the wild competition around you've decided to deploy an early beta version on mainnet to attract potential inverstors even though it's Friday... After the weekend you come into the office realizing that nobody ever turned off the RPC endpoint and one of your company accounts was unlocked for deployment. You quickly turned of RPC and checked the balance, only to find over 1000ETH is gone :scream: This will be a huge blow for your startup, you can already imagine people giving 'Another Exit Scam' title to the news about this attack.. You check the transactions and find out that even though attack was recent money is already spread in small portions around many accounts. However all those accounts are funneling funds into something peculiar. You query the address and it's a contract similar to a Ponzi scheme! Looks like they decided to use your ether to attract even more people into another scam! Well, you didn't spend half of a year on the startup for nothing, your Solidity skills are top notch and this contract looks to be very amateurish. Time to teach the attackers a lesson!

You check and you have some ETH in your own wallet 0xd34435a94f999e0e9fc7c3780a15aa1a815f76e9 to send transactions. You complete the level when have you more than 1000ETH in your wallet. Run `./get_status 3` to make sure you completed the level successfully.


## Notes

- Restart a challenge by just CTRL+C and run `./start_level` again