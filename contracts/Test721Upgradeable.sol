// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Test721Upgradeable is Initializable, ERC721Upgradeable{
    function initialize(
        string memory name,
        string memory symbol
    ) public virtual initializer {
        __ERC721_init_unchained(name, symbol);
    }
}