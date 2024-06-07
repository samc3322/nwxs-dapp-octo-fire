require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const { VITE_ALCHEMY_API_URL, VITE_PRIVATE_KEY, VITE_ETHERSCAN_API_KEY } = process.env

module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: { enabled: true, runs: 200 }
  },
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    sepolia: {
        url: VITE_ALCHEMY_API_URL,
        accounts: [VITE_PRIVATE_KEY],
    },
  },
  etherscan: {
      apiKey: VITE_ETHERSCAN_API_KEY
  }
};
