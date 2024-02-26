

import { ethers } from "hardhat";


const main = async () => {
    const deployPersonContractAddress = "0xfB637E9682e6281163A18C95AD44bE431Baa1089";
    const iPerson = await ethers.getContractAt("IPersons", deployPersonContractAddress);


    const result = await iPerson.getAUser(1);

    console.log(result)
}


main().catch((error) => {
    console.log(error);
    process.exitCode = 99;
})