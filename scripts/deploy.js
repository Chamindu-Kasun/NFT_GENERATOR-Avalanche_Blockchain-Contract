const { ethers } = require("hardhat");
const console = require("console");

const main = async () => {
  const Transactions = await ethers.getContractFactory("NFTGenerator");
  const transactions = await Transactions.deploy("NFTGenerator", "NFT");

  await transactions.deployed();

  console.log(`NFT deployed to : ${transactions.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
