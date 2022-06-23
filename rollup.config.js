
import pkg from "./package.json";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: "./src/main.ts",
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    sourceMaps(),
  ],
  output: [
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true,
    },
    {
      name: "vue",
      format: "es",
      file: pkg.module,
      sourcemap: true,
    },
  ],
  onwarn: (msg, warn) => {
    // 忽略 Circular 的错误
    if (!/Circular/.test(msg)) {
      warn(msg);
    }
  },
}