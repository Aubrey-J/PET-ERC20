const hre = require("hardhat");

async function main() {
  const TokenPET = await hre.ethers.getContractFactory("TokenPETMintable");
  // const pet = await TokenPET.deploy('1000000000', 'PETurrency', '5', 'PET-D');
  const pet = await TokenPET.deploy();
  
  await pet.deployed();
  
  console.log("TokenPET symbol is:", await pet.symbol());
  console.log("TokenPET deployed to:", pet.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
