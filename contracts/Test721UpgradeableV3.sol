// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Test721UpgradeableV2.sol";

contract Test721UpgradeableV3 is Test721UpgradeableV2{
    function initialize(
        string memory name,
        string memory symbol
    ) public override virtual initializer {
        __ERC721_init_unchained(name, symbol);
    }

    function helloV3() public pure returns(string memory) {
        return "Hello V3";
    }
}