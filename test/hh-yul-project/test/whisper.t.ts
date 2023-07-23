import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Whisper", function() {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    const Whisper = await ethers.getContractFactory("Whisper");
    const whisper = await Whisper.deploy();
    return { whisper };
  }

  describe("Wondering aloud", function() {
    it("Works", async function() {
      const { whisper } = await loadFixture(deployFixture);
      const text = [
        "And it's only the giving",
        "That makes you",
        "What you are"
      ].join("\n");

      const storedText = await whisper.getValue();
      expect(storedText).to.equal(text);
    });

  });
});
