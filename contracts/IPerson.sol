

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

interface IPersons {
    function getPerson() external view returns (string memory name, uint age);

     function createPerson(string memory name, uint age) external;

     function getAUser(uint index) external view returns(string memory, uint);

     function updateName(uint index, string memory name) external;

     function updateAge(uint8 age, uint index) external;
}