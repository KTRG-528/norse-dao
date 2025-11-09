// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract IPVault is ERC721, Ownable {
uint256 public nextId;
mapping(uint256 => string) public cid; // IPFS/Arweave content id
mapping(uint256 => address) public trustHolder; // holding trust/SPV
2event IPRegistered(uint256 indexed id, address indexed owner, string cid);
constructor() ERC721("Grønli IPVault", "GIP") {}
function registerIP(address to, string memory _cid, address _trust)
external onlyOwner returns (uint256) {
uint256 id = ++nextId;
_safeMint(to, id);
cid[id] = _cid;
trustHolder[id] = _trust;
emit IPRegistered(id, to, _cid);
return id;
}
// Basic metadata retrieval (extend with ERC721 metadata)
}