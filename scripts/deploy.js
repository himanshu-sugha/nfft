const { ethers } = require("hardhat");

async function main() {
    const ComplianceNFT = await ethers.getContractFactory("ComplianceNFT");
    const complianceNFT = await ComplianceNFT.deploy();
    await complianceNFT.deployed();
    console.log("Contract deployed to:", complianceNFT.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
