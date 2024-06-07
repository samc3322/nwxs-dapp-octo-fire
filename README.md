# nxws-dapp-octo-fire
A simple web3 dapp for minting NFTs

## setup
NodeJS (16.0.0) & NPM  
```
nvm install 16.0.0
nvm use 16.0.0
npm install
```
copy .ENV-EXAMPLE and create .env file


---

## test
Hardhat provides testing capibilities using Chai as a assertion library and Mocha as a test runner.
```
# runs on HH network only
npx hardhat node

# executes all tests in folder
npx hardhat test

# execute a specific test
npx hardhar test test/tests.js
```
