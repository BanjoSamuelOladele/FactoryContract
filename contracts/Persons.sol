

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;
import "./Person.sol";


contract Persons{
    address private owner;

    constructor(){
        owner = msg.sender;
    }

    mapping (address => Person[]) private contacts;


    function createPerson(string memory name, uint age) external {
        contacts[msg.sender].push(new Person(name, age));
    }

    function updateName(uint index, string memory name) external{
        Person person = contacts[msg.sender][index];
        person.updatePersonName(name);
    }

    function updateAge(uint8 age, uint index) external{
        Person person = contacts[msg.sender][index];
        person.updatePersonAge(age);
    }

    function getAUser(uint index) external view returns(string memory, uint) {
        return contacts[msg.sender][index].getPerson();
    }
}