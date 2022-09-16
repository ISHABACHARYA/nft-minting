let Endpoints = require("../../configs/Endpoints");
let appAlchemy = require("../../utils/appAlchemy");
let  appWeb3= require( "../../utils/web3");

const walletController = {
  connect: async (req, res, next) => {
    let url = `${Endpoints.ETH_BASE_URL}${process.env.ALCHEMY_TOKEN}`;

    try {
      let response = await appWeb3(url);
      console.log("success on connecting wallet", response.data);

      res.status(200).send(response.data);
    } catch (err) {
      console.log("error on connecting wallet", { url }, err);
      res.status(400).send(err);
    }
  },
  latestBlock: async (req, res) => {
    try {
      const getLatestBlock = await appAlchemy.core.getBlockNumber();
      console.log("latest block from the alchemy service", getLatestBlock);
      res.status(200).send({ msg: "success", data: getLatestBlock });
    } catch (err) {
      console.log("error on getting the block", err);
      res.status(400).send({ msg: "error on getting latest block", err: err });
    }
  },
};
module.exports = walletController;
