const Factory = artifacts.require("UniswapV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

module.exports =  async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]); //send transaction to deployment  
  const factory = await Factory.deployed(); //wait for transaction to be mined

  //execute funciton on smart contract
  let token1Address, token2Address;
  if(network == 'mainnet') {
      token1Address = '';
      token2Address = '';
  } else {
    //deploy tokens
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
    //get reference to tokens
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    //save addresses
    token1Address = token1.address;
    token2Address = token2.address;
  }
  await factory.createPair(token1Address, token2Address);

};
