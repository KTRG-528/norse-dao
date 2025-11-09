// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "./TrancheToken.sol";
contract BondFactory {
struct Bond {
address issuer;
address trancheA;
address trancheB;
address trancheC;
uint256 issuedAt;
uint256 awakeableUntil; // issuedAt + 39 years
}
Bond[] public bonds;
function createBond(address issuer, uint256 totalSupply) external returns
(uint256) {
// Deploy three tranche tokens programmatically (or use pre-deployed
factories in production)
TrancheToken a = new TrancheToken("Bond Tranche A","BTA");
TrancheToken b = new TrancheToken("Bond Tranche B","BTB");
TrancheToken c = new TrancheToken("Bond Tranche C","BTC");
// mint initial supplies by relative weights (example)
a.mint(msg.sender, (totalSupply * 50) / 100);
b.mint(msg.sender, (totalSupply * 30) / 100);
c.mint(msg.sender, (totalSupply * 20) / 100);
bonds.push(Bond({ issuer: issuer, trancheA: address(a), trancheB:
address(b), trancheC: address(c), issuedAt: block.timestamp, awakeableUntil:
4block.timestamp + 39 * 365 days }));
return bonds.length - 1;
}
}