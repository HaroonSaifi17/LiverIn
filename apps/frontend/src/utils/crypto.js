import { ethers } from "ethers";

// USDT contract on Ethereum (replace with one from the network you want to test on, like Goerli or Mumbai)
const USDT_CONTRACT_ADDRESS = "0x3813e82e6f7098b9583FC0F33a962D02018B6803"; // USDT on Polygon Mumbai
const RECEIVER_WALLET = "0x70aC332BF065C6280dCFCA510392D25A8271e163"; // Your receiver wallet

const ERC20_ABI = [
  "function transfer(address to, uint256 amount) public returns (bool)",
  "function decimals() view returns (uint8)",
];


export const sendUSDT = async () => {
  if (!window.ethereum) {
    alert("MetaMask not found!");
    return;
  }

  try {
    // Connect wallet
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const usdtContract = new ethers.Contract(
      USDT_CONTRACT_ADDRESS,
      ERC20_ABI,
      signer
    );

    // Get decimals (USDT usually has 6)
    const decimals = await usdtContract.decimals();

    const amount = ethers.parseUnits("10", decimals); // 10 USDT

    const tx = await usdtContract.transfer(RECEIVER_WALLET, amount);
    await tx.wait();

    alert("Payment sent successfully!");
  } catch (err) {
    console.error(err);
    alert("Transaction failed: " + err.message);
  }
};
