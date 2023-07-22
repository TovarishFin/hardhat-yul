export interface YulConfig {
  version: string;
}

export interface YulArtifacts {
  [key: string]: { abi: any[] } ;
}
