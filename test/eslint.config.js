import javascript from '../packages/js/dist/index.js';
import typescript from '../packages/ts/dist/index.js';

const jsConfig = javascript();
const tsConfig = typescript();

export default [
  ...jsConfig,
  ...tsConfig,
]; 