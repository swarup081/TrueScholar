// Found in your tsconfig.json
export const CONTRACT_ADDRESS = "0x0082E47BC2741F1E400cB548ff5BfaF388deD220";

export const CONTRACT_ABI = [
  // 1. Mint Function (Check your Solidity file: is it 'safeMint' or 'mint'?)
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "string", "name": "uri", "type": "string" }
    ],
    "name": "safeMint", 
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // 2. Check Balance (For Dashboard)
  {
    "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  // 3. Get Token URI (For Metadata)
  {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "tokenURI",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }
];