require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const { VITE_ALCHEMY_API_URL, VITE_PRIVATE_KEY, VITE_ETHERSCAN_API_KEY } = process.env

module.exports = {
    solidity: {
        version: "0.8.19",

        // begin custom optimizations
        settings: {
            optimizer: { enabled: true, runs: 200 }
        },
        defaultNetwork: "sepolia",
        networks: {
            hardhat: {},
            sepolia: {
                url: VITE_ALCHEMY_API_URL,
                accounts: [VITE_PRIVATE_KEY],
            },
        },
        etherscan: {
            apiKey: VITE_ETHERSCAN_API_KEY
        }
    },
}
