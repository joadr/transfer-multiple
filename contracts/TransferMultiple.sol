//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.0;


contract TransferMultiple {
  address public owner;
  address payable[] public recipents;

  constructor () public payable {
    owner = msg.sender;
  }
  
  function transferEth() external payable {
    require(owner == msg.sender);
    uint amount = address(this).balance / recipents.length;

    for (uint i=0; i < recipents.length; i++) {
      address payable recipent = recipents[i];
      recipent.transfer(amount);
    }
  }

  function addRecipent(address payable _address) public {
    require(owner == msg.sender);
    recipents.push(_address);
  }

  function removeRecipents() public {
    require(owner == msg.sender);
    delete recipents;
  }
  
}
