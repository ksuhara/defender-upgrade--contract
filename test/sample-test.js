const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC721Upgradeable", function () {
  it("test", async function () {
    const ERC721 = await ethers.getContractFactory("Test721Upgradeable");
    const erc721 = await ERC721.deploy();
    await erc721.deployed();
    await erc721.initialize("test name", "TN");
    const name = await erc721.name();
    console.log(name);
  });
});
