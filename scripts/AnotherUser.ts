

import { ethers } from "hardhat";


const main = async() =>{

    const [owner, otherSigner ] = await ethers.getSigners();
    const deployPersonContractAddress = "0xfB637E9682e6281163A18C95AD44bE431Baa1089";
    const iPerson = await ethers.getContractAt("IPersons", deployPersonContractAddress);


    const result = await iPerson.connect(owner).createPerson("Ope", 3);
    await result.wait();


    const res = await iPerson.connect(owner).getAUser(0);


    console.log(res);
}


main().catch((error) =>{
    console.log(error);
    process.exitCode = 1;
});