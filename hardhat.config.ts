import { HardhatUserConfig } from "hardhat/config";

// PLUGINS
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";

// Process Env Variables
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",

  solidity: {
    compilers: [
      {
        version: "0.7.3",
        settings: {
          optimizer: { enabled: true, runs: 1 },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: { enabled: true, runs: 1 },
        },
      },
    ],
  },

  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
