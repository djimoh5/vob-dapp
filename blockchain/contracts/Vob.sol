pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract VobToken is StandardToken {
  string public name = "VoiceOfBlockchain";
  string public symbol = "VOB";
  uint8 public decimals = 0;
  string public version = "1.0";

  uint256 public MAX_SUPPLY = 5000;
  uint256 public numTicketsSold = 0;

  constructor() public {

  }

  function () external payable {
    uint256 weiAmount = msg.value;
    uint256 numTickets = weiAmount.div(uint256(10)**18);

    require(numTickets > 0, "Must purchase at least one ticket");
    require(numTicketsSold.add(numTickets) <= MAX_SUPPLY, "number of tickets sold is greater than max supply");

    balances[msg.sender] = balances[msg.sender].add(numTickets);
    numTicketsSold = numTicketsSold.add(numTickets);
  }

  function maxTickets() public view returns (uint256) {
    return MAX_SUPPLY;
  }

  function ticketsSold() public view returns (uint256) {
    return numTicketsSold;
  }
}