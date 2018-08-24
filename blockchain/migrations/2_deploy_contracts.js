const VobToken = artifacts.require("./VobToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(VobToken);
};