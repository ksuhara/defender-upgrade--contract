const { ethers, upgrades } = require("hardhat");

async function main() {
  // 参考 https://zenn.dev/razokulover/articles/708bcf4b9623c5
  const v1Address = "0x262c4075Bc8dae427b74Db99286ac2811ad995a9";
  const ERC721 = await ethers.getContractFactory("Test721UpgradeableV2");
  const erc721 = await upgrades.upgradeProxy(v1Address, ERC721);
  console.log("Deploying...: ", erc721.address);
  await erc721.deployed();
  console.log("erc721 deployed to:", erc721.address);
  const name = await erc721.helloV2();
  console.log(name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
