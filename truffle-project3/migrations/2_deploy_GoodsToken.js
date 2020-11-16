const GoodsToken = artifacts.require("./GoodsToken");

module.exports = function(deployer){
    deployer.deploy(GoodsToken);
}