npm install --save-dev hardhat @openzeppelin/contracts
npm install ethers dotenv
javascriptconst hre = require("hardhat");
async function main() {
console.log("🌩 Deploying Norse DAO Protocol Suite...\n");
// 1. Deploy Heimdall (Membership NFT) First
console.log("⚡ Deploying Heimdall Protocol (Membership)...");
const Heimdall = await hre.ethers.getContractFactory("HeimdallProtocol");
const heimdall = await Heimdall.deploy();
await heimdall.deployed();
console.log("✅ Heimdall deployed to:", heimdall.address);
// 2. Deploy Odin (Governance)
console.log("\n⚡ Deploying Odin Protocol (Governance)...");
const Odin = await hre.ethers.getContractFactory("OdinProtocol");
const odin = await Odin.deploy(heimdall.address);
await odin.deployed();
console.log("✅ Odin deployed to:", odin.address);
// 3. Deploy Tyr (Justice)
console.log("\n⚡ Deploying Tyr Protocol (Justice)...");
const Tyr = await hre.ethers.getContractFactory("TyrProtocol");
const tyr = await Tyr.deploy(heimdall.address);
await tyr.deployed();
console.log("✅ Tyr deployed to:", tyr.address);
// 4. Deploy Freyr (Treasury)
console.log("\n⚡ Deploying Freyr Protocol (Treasury)...");const Freyr = await hre.ethers.getContractFactory("FreyrProtocol");
const freyr = await Freyr.deploy(heimdall.address, odin.address);
await freyr.deployed();
console.log("✅ Freyr deployed to:", freyr.address);
// 5. Deploy Thor (Security)
console.log("\n⚡ Deploying Thor Protocol (Security)...");
const Thor = await hre.ethers.getContractFactory("ThorProtocol");
const thor = await Thor.deploy(heimdall.address, odin.address);
await thor.deployed();
console.log("✅ Thor deployed to:", thor.address);
// 6. Deploy Frigg (Wisdom Council)
console.log("\n⚡ Deploying Frigg Protocol (Wisdom)...");
const Frigg = await hre.ethers.getContractFactory("FriggProtocol");
const frigg = await Frigg.deploy(heimdall.address, odin.address);
await frigg.deployed();
console.log("✅ Frigg deployed to:", frigg.address);
// Save addresses to config file
const deployedAddresses = {
network: hre.network.name,
heimdall: heimdall.address,
odin: odin.address,
tyr: tyr.address,
freyr: freyr.address,
thor: thor.address,
frigg: frigg.address,
deployedAt: new Date().toISOString()🔧 Hardhat Configuration
};
console.log("\n📋 Deployment Complete!");
console.log(JSON.stringify(deployedAddresses, null, 2));
// Save to file
const fs = require('fs');
fs.writeFileSync(
'./deployed-contracts.json',
JSON.stringify(deployedAddresses, null, 2)
);
}
main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});