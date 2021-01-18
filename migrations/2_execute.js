const TransferMultiple = artifacts.require('TransferMultiple')

module.exports = async function (deployer, network, accounts) {
  const instance = await TransferMultiple.deployed()
  // const accounts = await web3.eth.getAccounts()
  // console.log(accounts)
  // const transaction = await web3.eth.sendTransaction({
  //   from: accounts[0],
  //   to: TransferMultiple.address,
  //   value: "100000000000000000", 
  //   data: "0x0"
  // })
  console.log('Removing old recipents')
  await instance.removeRecipents()
  // console.log('adding recipent 1', accounts[1])
  // await instance.addRecipent(accounts[1])
  console.log('adding recipent 2', "0x4cD7175369F66f17844Aad08Ec6bC2f93fe40f5c")
  await instance.addRecipent("0x4cD7175369F66f17844Aad08Ec6bC2f93fe40f5c")
  console.log('adding recipent 2 again', "0x4cD7175369F66f17844Aad08Ec6bC2f93fe40f5c")
  await instance.addRecipent("0x4cD7175369F66f17844Aad08Ec6bC2f93fe40f5c")
  console.log('adding recipent 3', '0xE8e64D45b96a5903B22aF99697fa38e55f7993dB')
  await instance.addRecipent('0xE8e64D45b96a5903B22aF99697fa38e55f7993dB')
  console.log('calling transfer')
  await instance.transferEth({from: accounts[0], value: web3.utils.toWei('0.1', 'ether')})
  console.log('finished')
  // await instance.transfer({from: accounts[0], value: web3.utils.toWei('1', 'ether')})
  // console.log('transaction', transaction)
}
