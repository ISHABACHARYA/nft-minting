let { Network, Alchemy } = require("alchemy-sdk");

const settings = {
  apiKey: process.env.ALCHEMY_TOKEN,
  network: Network.ETH_MAINNET,
};

const appAlchemy = new Alchemy(settings);
module.exports = appAlchemy;
