// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
module.exports = {
solidity: {
version: "0.8.21",
settings: {
optimizer: {
enabled: true,
runs: 200
}
}
},
networks: {
// Polygon Mumbai Testnet
mumbai: {
url: process.env.MUMBAI_RPC_URL,
accounts: [process.env.PRIVATE_KEY],
chainId: 80001
},
// Polygon Mainnet
polygon: {
url: process.env.POLYGON_RPC_URL,
accounts: [process.env.PRIVATE_KEY],
chainId: 137
},
// Arbitrum One🌐 Frontend Integration (React)
Contract Hooks (useNorseDAO.js)
arbitrum: {
url: process.env.ARBITRUM_RPC_URL,
accounts: [process.env.PRIVATE_KEY],
chainId: 42161
}
},
etherscan: {
apiKey: {
polygon: process.env.POLYGONSCAN_API_KEY,
arbitrumOne: process.env.ARBISCAN_API_KEY
}
}
};