import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, userConfig } from "hardhat";

import { BigNumber } from "ethers";
import { expect } from "chai";
import {
  DividendPayingToken,
  DividendPayingToken__factory,
} from "../typechain";

const { BN, ether } = require("@openzeppelin/test-helpers");

describe("DividendPayingContract - Tests", async () => {
  let dividendPayingToken: DividendPayingToken;
  let dividendPayingToken__factory: DividendPayingToken__factory;

  let owner: SignerWithAddress,
    tokenHolder1: SignerWithAddress,
    tokenHolder2: SignerWithAddress,
    tokenHolder3: SignerWithAddress,
    anyone: SignerWithAddress;

  beforeEach("Setting up contracts", async () => {
    [owner, tokenHolder1, tokenHolder2, tokenHolder3, anyone] =
      await ethers.getSigners();

    dividendPayingToken__factory = new DividendPayingToken__factory(owner);
    dividendPayingToken = await dividendPayingToken__factory.deploy();
  });

  context("Functions", async () => {
    context("1) mint()", async () => {
      it("when someone other than the owner tries to mint tokens", async function () {
        await expect(
          dividendPayingToken.connect(anyone).mint(anyone.address, ether("1"))
        ).to.be.reverted;
      });
    });
  });
});
