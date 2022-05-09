const { ethers, upgrades } = require("hardhat");

async function main() {
  // 参考 https://zenn.dev/razokulover/articles/708bcf4b9623c5
  const ERC721 = await ethers.getContractFactory("Test721Upgradeable");
  const erc721 = await upgrades.deployProxy(ERC721, ["test name", "TN"]);
  console.log("Deploying...: ", erc721.address);
  await erc721.deployed();
  console.log("erc721 deployed to:", erc721.address);
  const name = await erc721.name();
  console.log(name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
