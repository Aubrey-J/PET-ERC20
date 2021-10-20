const { expect } = require("chai");

describe("PET", function() {
  it("Should return the new PET once it's changed", async function() {
    const TokenPET = await ethers.getContractFactory("TokenPET");
    const pet = await TokenPET.deploy();
    await pet.deployed();

    expect(await pet.name()).to.equal("PETurrency");
    expect(await pet.symbol()).to.equal("PET");
  });
});
