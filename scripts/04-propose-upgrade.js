// scripts/propose-upgrade.js
const { defender } = require("hardhat");

async function main() {
  // 参考 https://docs.openzeppelin.com/defender/guide-upgrades#propose-the-upgrade
  const proxyAddress = "0x262c4075Bc8dae427b74Db99286ac2811ad995a9";

  const ERC721 = await ethers.getContractFactory("Test721UpgradeableV3");
  console.log("Preparing proposal...");
  const proposal = await defender.proposeUpgrade(proxyAddress, ERC721);
  console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
