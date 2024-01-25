import { r as registerInstance, h, H as Host } from "./index.b5e9a656.js";
const playgroundCss = ":host{display:block;position:relative;width:100vw;height:100vh;padding:0rem 0rem 0rem 0rem}";
const IxPlaygroundInternalStyle0 = playgroundCss;
const PlaygroundInternal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null);
  }
};
PlaygroundInternal.style = IxPlaygroundInternalStyle0;
export {
  PlaygroundInternal as ix_playground_internal
};
