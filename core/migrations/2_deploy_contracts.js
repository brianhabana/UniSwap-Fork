const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports =  async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]); //send transaction to deployment  
  const factory = await Factory.deployed(); //wait for transaction to be mined

  //execute funciton on smart contract
  let token1Address, token2Address;
  if(network == 'mainnet') {
      token1Address = '';
      token2Address = '';
  }
  await factory.createPair();

};
