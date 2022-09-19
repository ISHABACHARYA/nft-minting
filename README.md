# Sample NFT minting Project

This project demonstrates a basic nft minting process. It comes with a sample contract, a test for that contract, and a script that deploys that contract and mints an NFT.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Steps involved in deployment

- Create a node project
  `npm init nft-minting-proj`
- Install hardhat
  `npm install --save-dev hardhat `
  `npx hardhat `
- Install openzepplin
  `npm install @openzeppelin/contracts`
- Login to Alchemy, create a project and import API_KEY and URL to your **.env**
- Configure hardhat network config
- Deploy contract to test net.
  `npx hardhat run scripts/deploy.js --network goerli`

#### Onto Minting nft

- create a mint-nft and write the scripts for minting nft signing with the **contract address**.
- Upload your nft content to Pinata
- create a nft-metadata file and give the properties of nft including the pinata URI.
- execute the minting scripts
  `node scripts/mint-nft.js`
