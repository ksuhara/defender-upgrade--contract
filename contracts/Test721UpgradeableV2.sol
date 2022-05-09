// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Test721Upgradeable.sol";

contract Test721UpgradeableV2 is Test721Upgradeable{
    function initializev2(
        string memory name,
        string memory symbol
    ) public virtual initializer {
        __ERC721_init_unchained(name, symbol);
    }

    function helloV2() public pure returns(string memory) {
        return "Hello";
    }
}