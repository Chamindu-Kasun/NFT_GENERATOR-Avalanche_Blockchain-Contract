const dotenv = require("dotenv");
require("@nomiclabs/hardhat-ethers");

dotenv.config();

module.exports = {
  solidity: {
    version: "0.8.16",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
