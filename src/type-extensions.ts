import "hardhat/types/config";

import { YulConfig, YulArtifacts } from "./types";

declare module "hardhat/types/config" {
  interface HardhatUserConfig {
    yul?: Partial<YulConfig>;
  }

  interface HardhatConfig {
    yul: YulConfig;
    yulArtifacts?: YulArtifacts;
  }
}
