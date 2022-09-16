require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
// const MyNFT = await ethers.getContractFactory("MyNFT");

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "goerli",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 950000000000,
    },
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
