// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
3import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract TrancheToken is ERC20, Ownable {
constructor(string memory name_, string memory sym_) ERC20(name_, sym_) {}
function mint(address to, uint256 amount) external onlyOwner {
_mint(to, amount);
}
}