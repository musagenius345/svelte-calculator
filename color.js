// Import all modules of Color.js and assign Color to a global,
// for easier testing and experimentation without building
import Color from "./color-src/index.js";
import * as util from "./color-src/util.js";

window.Color = window.Color || Color;

// Re-export
export default Color;
export {util};
