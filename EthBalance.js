const { ethers } = require("ethers");

const provider = new ethers.InfuraProvider(
  "mainnet",
  "YOUT_KEY"
);

const walletAddress = "0xYOUR_WALLET";

async function getBalance() {
  try {
    const balance = await provider.getBalance(walletAddress);
    const balanceInEther = ethers.formatEther(balance);
    console.log(`Wallet balance ${walletAddress}: ${balanceInEther} ETH`);
  } catch (error) {
    console.error("Error:", error);
  }
}

getBalance();
