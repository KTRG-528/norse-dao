// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract NFTPersona is ERC721, Ownable {
uint256 public nextPersona;
mapping(uint256 => string) public cpid; // CPID or hashed identity
constructor() ERC721("Grønli NFTPersona","GNP") {}
function mintPersona(address to, string memory _cpid) external onlyOwner
returns (uint256) {
uint256 id = ++nextPersona;
_safeMint(to, id);
cpid[id] = _cpid;
return id;
}
}