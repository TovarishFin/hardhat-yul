export interface YulArtifacts {
  [key: string]: { abi: any[] } ;
}

export interface YulConfig {
  yul?: any;
  version: string;
}

