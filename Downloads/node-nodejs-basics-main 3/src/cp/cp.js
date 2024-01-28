import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./files/script.js", ...args], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });

  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

await spawnChildProcess(["arg1", "arg2"]);
