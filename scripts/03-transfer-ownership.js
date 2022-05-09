const { ethers, upgrades } = require("hardhat");

// scripts/transfer-ownership.js
async function main() {
  // 参考 https://docs.openzeppelin.com/defender/guide-upgrades#transfer-control-of-upgrades-to-a-multisig

  const gnosisSafe = "0x5a938602c14aAa754b96E6038E42aE6fC83718e2";

  console.log("Transferring ownership of ProxyAdmin...");
  // The owner of the ProxyAdmin can upgrade our contracts
  await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
  console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
