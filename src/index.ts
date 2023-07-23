import { TASK_COMPILE_GET_COMPILATION_TASKS } from "hardhat/builtin-tasks/task-names";
import { extendConfig, subtask } from "hardhat/internal/core/config/config-env";

import { TASK_COMPILE_YUL, TASK_COMPILE_YULP } from "./task-names";
import "./type-extensions";

import { YulConfig, YulArtifacts } from "./types";

extendConfig((config) => {
  const defaultConfig = { version: "latest" };
  config.yul = { ...defaultConfig, ...config.yul };
});

// add new tasks: compile:yul, compile:yulp
subtask(
  TASK_COMPILE_GET_COMPILATION_TASKS,
  async (_, __, runSuper): Promise<string[]> => {
    const otherTasks = await runSuper();
    return [...otherTasks, TASK_COMPILE_YUL, TASK_COMPILE_YULP];
  }
);

// handle the newly added compile:yul
subtask(TASK_COMPILE_YUL, async (_flags, { config, artifacts }) => {
  const { compileYul } = await import("./compilation");

  // oh boy!
  const yulCfg = config as unknown as YulConfig & { yulArtifacts: YulArtifacts };
  await compileYul(yulCfg.yul, config.paths, artifacts, yulCfg.yulArtifacts);
});

// handle the newly added compile:yulp tasks
subtask(TASK_COMPILE_YULP, async (_flags, { config, artifacts }) => {
  const { compileYulp } = await import("./compilation");

  // oh boy!
  const yulCfg = config as unknown as YulConfig & { yulArtifacts: YulArtifacts };
  // TODO: pass yulArtifacts to yulp compiler
  await compileYulp(yulCfg.yul, config.paths, artifacts);
});
