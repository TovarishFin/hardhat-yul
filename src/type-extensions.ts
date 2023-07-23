import "hardhat/types/config";
import "hardhat/config";

import { YulConfig, YulArtifacts } from "./types";

declare module "hardhat/types/config" {
  interface HardhatUserConfig {
    yul?: YulConfig;
    yulArtifacts?: YulArtifacts;
  }

  interface HardhatConfig {
    yul?: YulConfig;
    yulArtifacts?: YulArtifacts;
  }
}
