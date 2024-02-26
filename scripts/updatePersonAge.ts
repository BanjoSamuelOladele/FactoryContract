


import { ethers } from "hardhat";



const updateAge = async () =>{
    const deployPersonContractAddress = "0xfB637E9682e6281163A18C95AD44bE431Baa1089";
    const iPerson = await ethers.getContractAt("IPersons", deployPersonContractAddress);



    const res = await iPerson.updateAge(100, 1);


    await res.wait();
}


updateAge().catch((error) =>{
    console.log(error);
    process.exitCode = 1;
})