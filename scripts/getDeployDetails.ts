
import { ethers } from "hardhat";


const main = async () => {

    const deployPersonContractAddress = "0xfB637E9682e6281163A18C95AD44bE431Baa1089";
    const iPerson = await ethers.getContractAt("IPersons", deployPersonContractAddress);


    console.log ("before")
    const result = await iPerson.createPerson("Dele", 2);

    console.log("during")
    await result.wait();

    console.log("after")

    const res = await iPerson.getAUser(2);

    console.log(res);
};

main().catch((error) => {
    console.log(error);
    process.exitCode = 2;
});