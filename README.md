# Smart Contract Hacker Playground 

## Challenges :muscle:

### Parity Hacks 1/2 

The [challenge](./Parity_1_2/README.md) contains two levels that are based on the Parity hacks from July (Level 1) and November 2017 (Level 2). Level 1 is based on the contract version from this commit [here](https://github.com/paritytech/parity/tree/6345b5403448736e633b502cc111f43a67babbf6/js/src/contracts that was done shortly before the first attack occured.  Level 2 incorporates the fixes that happened after the attack. The contracts have been slightly modified so they work with a more recent version of the compiler. 

### PoWH Coin 
PoWH or "Proof of Weak Hands" coin was advertised as a legitimate pyramid scheme that ran for several months between end of 2017 and beginning 2018. The [challenge](./PoWH_Coin/README.md) is based on the hack that put an end to the coin ultimately and where about ~1000 Ether was lost to the attackers. The PoWH contract deployment can be found at [0xa7ca36f7273d4d38fc2aec5a454c497f86728a7a](https://etherscan.io/address/0xa7ca36f7273d4d38fc2aec5a454c497f86728a7a).

## Installation :minidisc:

- Make sure you have `nodejs` 10.x and `npm` 6.x installed
- Run `npm install` to install dependencies. 

## Launch a challenge :rocket:

After installation simply change to the directory of the challenge and launch the level with `start_level`

```bash
$ ./start_level <number of the level>
```


## Notes

- Restart a challenge by just CTRL+C and run `./start_level` again

