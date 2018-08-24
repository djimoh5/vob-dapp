var VobToken = artifacts.require("../contracts/VobToken.sol")

contract('VobToken', function(accounts) {
  var testAccount = accounts[1];

  it("Max Supply should equal 5000", async function() {
    let token = await VobToken.deployed();
    let supply = await token.maxTickets();
    
    var totalSupply = supply.valueOf();
    var amount = new web3.BigNumber(5000);

    assert.equal(totalSupply, amount, `max supply (${totalSupply}) does not equal ${amount}`);
  });

  it("Sending 1 ETH should purchase one ticket", async function() {
    let token = await VobToken.deployed();
    let ethAmt = 1;

    await token.sendTransaction({ from: testAccount, value: web3.toWei(ethAmt, "ether")});
    let balance = await token.balanceOf(testAccount);

    assert.equal(balance, ethAmt, `testAccount should own ${ethAmt} ticket`);
  });

  it("Tickets sold should equal 1", async function() {
    let token = await VobToken.deployed();
    let supply = await token.ticketsSold();
    
    var totalSupply = supply.valueOf();
    var amount = new web3.BigNumber(1);

    assert.equal(totalSupply, amount, `tickets sold (${totalSupply}) does not equal ${amount}`);
  });
});