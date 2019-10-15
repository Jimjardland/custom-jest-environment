const NodeEnvironment = require('jest-environment-node')

class BrevduvorEnvironment extends NodeEnvironment {
  constructor(config) {
    super({
      ...config,
      globals: {
        ...config.globals,
        Uint8Array: Uint8Array,
        ArrayBuffer: ArrayBuffer
      }
    })
  }
  async setup() {
    await super.setup()
  }

  async teardown() {
    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = BrevduvorEnvironment
