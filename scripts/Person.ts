import { ethers } from "hardhat";

const main = async () => {

    const person = await ethers.deployContract("Persons", [], {});
    await person.waitForDeployment();


    console.log(`address of deployed person contract is ${person.target}`);
}


main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})