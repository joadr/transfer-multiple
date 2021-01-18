# Transfer ETH to multiple addresses in the same transaction
This project was built for testing purposes.

## Quickstart
### Migrations
Modify the migration `1_deploy.js` and uncomment line 4 if you wish to deploy the contract.
Modify the migration `2_execute.js` with your own addresses you want to test.

### Environment variables
Create a `.env` file with these variables: `DEV_MNEMONIC` and `INFURA_PROJECT_ID`

### Run these commands
```
$ npm install
$ npx truffle migrate --network ropsten
```