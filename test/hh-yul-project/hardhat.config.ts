// We load the plugin here.
import "../../src/index";
import { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",

  // The place to define your Yul contracts artifacts.
  yulArtifacts: { 
    // declare the ABI for Whisper
    Whisper: {
      abi: [
        {
          "inputs": [],
          "name": "getValue",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string",
            },
          ],
          "stateMutability": "view",
          "type": "function",
        },
      ],
    }
  }
};

export default config;

